import React from 'react'
import Slider from './Slider'
import {SliderData} from './sliderData'

import './Feed.css'
const Feed = () => {
    return (
        <div className="Feed">
            <div className="Feedslider">
              <Slider slides={SliderData}/> 
              
            </div>
          
        </div>
    )
}

export default Feed
