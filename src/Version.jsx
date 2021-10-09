import React from 'react'
import './Version.css';
const Version = ({subImages}) => {
    
    

    return (
        
        <div className="Version">
         
            {subImages.map((slide, index) =>{
                
                return (
                    <div className="v_image" key={index} >
                    <img src={slide} alt="" className="image1"/> 
                    </div>
                )
            })}
              
        </div>

    )
}

export default Version
