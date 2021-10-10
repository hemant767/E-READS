import React from 'react'
import './HomePage.css'

import Feed from '../../Component/Feed/Feed';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const HomePage = () => {
    return (
        <div className="HomePage">
            <Header />
            <div className="Body">
                <Sidebar />
                <Feed />

            </div>

        </div>

    )
}

export default HomePage
