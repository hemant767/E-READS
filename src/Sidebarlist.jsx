import React from 'react'
import './Sidebarlist.css'

const Sidebarlist = ({Title,Icon}) => {
    return (
        <div className="sidebarlist">
            {Icon && (<Icon className="Icon"/>)}
            <h3 className='sidebarlist_title'>{Title}</h3>
        </div>
    )
}

export default Sidebarlist
