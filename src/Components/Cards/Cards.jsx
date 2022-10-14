import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { CardData } from './dataCards'

function Cards() {
  return (
    <div className='cards'>
        {
            CardData.map((card, id)=>{
                return(
                    <div className="parent_container">
                        <Card
                        title = {card.title}
                        color = {card.color}
                        barValue = {card.barValue}
                        value = {card.value}
                        png = {card.png}
                        series = {card.series}
                        />
                    </div>
                )
            })
        }

    </div>
  )
}

export default Cards