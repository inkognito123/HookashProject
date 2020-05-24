import React from 'react';
import PersAcc from "./components/personalAccount/personalAccount"
import Mapp from "./components/map/map"
import Hookahs from "./components/hookahs/hookahs"
import {HashRouter, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="wrapper">
                    <div className="pers"><Route exact path='/' component={PersAcc}/></div>
                    <div className="map"><Route exact path='/map' component={Mapp}/></div>
                    <div className="hook"><Route exact path='/hook' component={Hookahs}/></div>
                </div>
            </HashRouter>
        );
    }
}

export default App;