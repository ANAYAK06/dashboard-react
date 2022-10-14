import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../src/images/icon.jpg'
import { SideData } from './data'
import {IoMdLogOut} from 'react-icons/io'
import {AiOutlineBars} from 'react-icons/ai'
import {motion} from 'framer-motion'

function Sidebar() {
    const [selected, setSelected] = useState(0)
    const [expanded, setExpended]= useState(true)

    const sidebarVariants = {
        true: {
            left:'0'
        },
        false:{
            left:'-60%'
        }
    }

  return (
    <>
     <div className='bar' style={ expanded? {left:'60%'}:{left:'5%'}}
     onClick ={()=> setExpended (!expanded)}
     
     >
            <AiOutlineBars/>

        </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768? `${expanded}`: ''}
    
    >
       
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Touch
            </span>
        </div>
        <div className="menu">
            {
            SideData.map((item, index)=>{
                return(
                    <div className={selected ===index? 'menuitem active': 'menuitem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })
            }
            <div className="menuitem">
                <IoMdLogOut />

            </div>
        </div>

    </motion.div>
    </>
  )
}

export default Sidebar