import React from 'react'
import Sidebarlist from '../Sidebarlist/Sidebarlist'
import {AiFillHome} from 'react-icons/ai'
import {MdMovie,MdLocalMovies,MdGamepad,MdViewList} from 'react-icons/md'
import {BsBookHalf} from 'react-icons/bs'

import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Sidebar_container">
                <Sidebarlist Title="HOME"  Icon={AiFillHome}/>
                <Sidebarlist Title="MOVIES" Icon={MdMovie}/>
                <Sidebarlist Title="SERIES" Icon={MdLocalMovies} />
                <Sidebarlist Title="GAMES" Icon={MdGamepad}/>
                <Sidebarlist Title="MY LIST" Icon={MdViewList}/>
                <Sidebarlist Title="READINGS" Icon={BsBookHalf}/>
            </div>
            
                
            
        </div>
    )
}

export default Sidebar
