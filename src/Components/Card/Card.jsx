import React, { useState } from 'react'
import {motion, AnimateSharedLayout} from 'framer-motion'
import './Card.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import Chart from 'react-apexcharts'

function Card(props) {
  const [expanded, setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
      {
        expanded? (
          <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
        ):
        (<CompactCard param={props} setExpanded={()=> setExpanded(true)} />)
        
      }
    </AnimateSharedLayout>
  )
}

// Compact Card
function CompactCard({param, setExpanded}){
  const Png = param.png;
  return(
    <motion.div className="compactcard"
    style={{
      background : param.color.backGround,
      boxShadow : param.color.boxShadow,
      

    }
    }
    onClick={setExpanded}
    layoutId ='expandablecard'
    >
      <div className="radialbar">
        <CircularProgressbar
        value={param.barValue}
        text ={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>₹{param.value}</span>
        <span>Last 24 hrs</span>

      </div>
    </motion.div>
  )
}
//expanded card

function ExpandedCard({param, setExpanded}){
  const data = {
    options : {
      chart:{
        type:"area",
        height:"auto",
      },
      dropShadow:{
        enabled: false,
        enabledOnSeries: undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:0.35,
      },
      fill: {
        color:["#fff"],
        type: "gradient",
      },
      dataLables: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip:{
        x: {
          format:"dd/MM/yy HH:mm"
        }
      },
      grid:{
        show : true,
      },
      xasis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",

        ]
      }

    }
  }
  return(
    <motion.div className="expandedcard"
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow

    }}
    layoutId ='expandablecard'

    >
      <div style={{alignSelf:'flex-end', cursor:'pointer', color:'white'}}>
        <AiFillCloseCircle onClick={setExpanded}/>

      </div>
      <span>{param.title}</span>
      <div className="chartcontainer">
        <Chart series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 hrs </span> 
    </motion.div>
  )
}
export default Card