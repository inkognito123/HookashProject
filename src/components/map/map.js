import React from "react";
import './map.css';
import '../../fonts/stylesheet.css';
import layer from '../../img/jpg/Layer 5.jpg';
import setting from '../../img/png/SETTINGS_48x48-32.png';
import speaker from '../../img/png/qqq.png'
import logo from '../../img/png/logo-ramsmobile.png'
import tel from '../../img/png/тел copy.png'
import {NavLink} from "react-router-dom";

class Map extends React.Component {
    render() {
        return (
            <body>
            <div className="rightHalf">
                <div className="mainWindow">
                    <div className="header">
                        <div className="layer"><img src={layer} alt="/"/></div>
                        <ul className="menu">
                            <li><NavLink to="/">BONUS PROGRAM</NavLink></li>
                            <li><NavLink to="/">BONUS SHOP</NavLink></li>
                            <li><NavLink to="/map">MAP</NavLink></li>
                            <li><NavLink to="/pers">PERSONAL INFORMATION</NavLink></li>
                        </ul>
                        <div className="setting">
                            <NavLink to="/"><img className="setting" src={setting} alt="/"/></NavLink>
                        </div>
                        <div className="radio">
                            <NavLink to="/">RAMSIDER <br/> RADIO</NavLink>
                        </div>
                        <div className="speaker">
                            <NavLink to="/"><img src={speaker} alt=""/></NavLink>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="logoMain">
                            <img className="logo" src={logo} alt=""/>
                            <span className="promo">RAMSIDER</span>
                            <span className="variant">electronic hookahs 2.0</span>
                        </div>
                        <p>Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU)
                            2016/679
                            (General Data Protection Regulation) in the current version of the OJ L<br/>
                            119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of
                            the
                            GDPR are linked with suitable recitals. The European Data Protection<br/>
                            Regulation is applicable as of May 25th, 2018 in all member states to harmonize data
                            privacy
                            laws across Europe. If you find the page useful, feel free<br/>
                            to support us by sharing the project. </p>
                        <div className="infoTel">
                            <NavLink className="web" to="/">WWW.RAMSIDER.COM</NavLink>
                            <img className="tel" src={tel} alt=""/>
                            <NavLink className="callTel" to="/">CALL SUPPORT</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftHalf">
                <div className="account">
                    <div className="circusProfile">
                        <div className="fotoAcc">
                            <NavLink to="/"><img src="" alt=""/></NavLink>
                        </div>
                        <div className="online"></div>
                        <span className="nikName">Tim Kaleniuk</span>
                        <span className="status">premium</span>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Map;