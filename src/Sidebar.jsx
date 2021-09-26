import React from 'react'
import Sidebarlist from './Sidebarlist'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Sidebar_container">
                <Sidebarlist Title="HOME" />
                <Sidebarlist Title="MOVIES" />
                <Sidebarlist Title="SERIES" />
                <Sidebarlist Title="GAMES" />
                <Sidebarlist Title="MY LIST" />
                <Sidebarlist Title="READINGS" />
            </div>
            
                
            
        </div>
    )
}

export default Sidebar
