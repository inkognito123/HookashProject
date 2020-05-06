import React from 'react';
import PersAcc from "./components/personalAccount/personalAccount"
import Map from "./components/map/map"
import Hookahs from "./components/hookahs/hookahs"
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <div className="pers"><Route exact path='/' component={PersAcc}/></div>
                    <div className="map"><Route exact path='/map' component={Map}/></div>
                    <div className="hook"><Route exact path='/hook' component={Hookahs}/></div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;