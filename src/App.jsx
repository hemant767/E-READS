import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} /> 
                
            </Switch>
        </BrowserRouter>
    );
};
export default App;
