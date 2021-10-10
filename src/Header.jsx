import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';


const box={
    color:"beige",
    fontWeight: "bold",
    fontSize:"15px"
}

function Header() {
    

    return (
        <div className="header">
        <div className="header_left">
                <h2>E-READS</h2>
            </div>
            <div className="header_mid">
                <div className="searchbar">
                    <input style={box} type="text" placeholder="Search" />
                    <SearchIcon className="search" />
                </div>
            </div>
            
            <div className="header_right">
                <Avatar />
            </div>
        </div>
    )
}

export default Header
