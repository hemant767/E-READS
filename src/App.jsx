import React from 'react'
import './App.css'
import Sidebar from './Sidebar';
import Header from './Header';
import Feed from './Feed';
const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="Body">
                <Sidebar />
                <div className="Feed_container">
                <Feed />
                </div>
            </div>
            
        </div>
        
    )
}

export default App
