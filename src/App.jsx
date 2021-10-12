import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>


    );
};
export default App;