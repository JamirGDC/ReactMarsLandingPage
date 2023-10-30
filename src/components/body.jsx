import React from 'react';
import Card from './card';
import CardsLeft from './cards-left';
import './cards-left.css'
import './body.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Arrows from './arrows';
import './arrows.css'


const Body = () => {
  return (
    <div className='container'>
      <div className="container-left2">
        <div className='register'>
          <p>©2020, MARS MISSION BY XULFI SHAH</p>
        </div>
        <div className='container-cards'>
          <div>
            <CardsLeft title="CURIOSITY" description="Sols 2735-2736:" descr=" Take Two." descriptionTwo="Rocking and Rolling Downhill" />
          </div>
          <div>
            <CardsLeft title="INSIGHTS." description="The MarCO Mission: " descr="Comes" descriptionTwo="to an End." />
          </div>
          <div>
            <CardsLeft title="ORBITERS." description="NASA's " descr="Treasure Map for" descriptionTwo="Water Ice on Mars." />
          </div>
        </div>

        <div className="fav-icons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-vimeo-v"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
      <div className='container-right'>
        <div><Card title="-81º" description="Temperature" descriptionTwo="Average(ºF)" /></div>
        <div><Card title="142" description="Distance From Sun" descriptionTwo="Millions of miles ovg" /></div>
        <div><Card title="4.35" description="Deepest Canyon" descriptionTwo="Miles Deep" /></div>

        <div className="container-arrows">
        <Arrows />
        </div>

      </div>
    </div>
  )
}

export default Body;