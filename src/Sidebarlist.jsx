import React from 'react'
import './Sidebarlist.css'

const Sidebarlist = ({Title}) => {
    return (
        <div className="sidebarlist">
            <h3 className='sidebarlist_title'>{Title}</h3>
        </div>
    )
}

export default Sidebarlist
