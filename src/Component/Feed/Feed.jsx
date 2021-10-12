import React from 'react'
import Slider from '../Slider/Slider'
import {SliderData} from '../sliderData/sliderData'

import './Feed.css'
const Feed = () => {
    return (
        <div className="Feed">
            <div className="Feedslider">
            <Slider slides={SliderData}/> 
            <Slider slides={SliderData}/>
            
              
            </div>
          
        </div>
    )
}

export default Feed
