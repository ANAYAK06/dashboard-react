import React from 'react'
import Review from '../Review/Review'
import Updates from '../Updates/Updates'
import './Rightside.css'

function Rightside() {
  return (
    <div className='rightside'>
        <div>
            <h3>Updates</h3>
            <Updates />

        </div>
        <div>
            <h3>Customer Review</h3>
            <Review />
        </div>

    </div>
  )
}

export default Rightside