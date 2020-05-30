import React from "react";
import './personalAccounts.css';
import '../../fonts/stylesheet.css';
import Fon from '../../img/jpg/fon.jpg';
import home from '../../img/png/Home 128x128.png';
import setting from '../../img/png/SETTINGS_48x48-32.png';
import speaker from '../../img/png/qqq.png'
import logo from '../../img/png/logo-ramsmobile.png'
import tel from '../../img/png/тел copy.png'
import chat from '../../img/png/Chat active .png'
import {NavLink} from "react-router-dom";

class PersAcc extends React.Component {
    render() {
        return (
            <body>
            <div className="rightHalf">
                <div className="mainWindow">
                    <div className="header">
                        <div className="home">
                            <NavLink to="/"><img src={home} alt="/"/></NavLink>
                        </div>
                        <ul className="menu">
                            <li><NavLink to="/">BONUS PROGRAM</NavLink></li>
                            <li><NavLink to="/">BONUS SHOP</NavLink></li>
                            <li><NavLink to="/map">MAP</NavLink></li>
                            <li><NavLink to="/">PERSONAL INFORMATION</NavLink></li>
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
                    <div className="title">
                        <h1>PREMIUM LEVEL</h1>
                    </div>
                    <div className="circle">
                        <div className="circW">
                            <div className="circleW"></div>
                            <div className="circleW1"></div>
                            <span className="timeNumber">148</span>
                            <span className="timeWord">hours</span>
                            <span className="smokingTime">Smoking time</span>
                        </div>
                        <div className="circR">
                            <div className="circleR"></div>
                            <div className="circleR1"></div>
                            <span className="powerNumber">120</span>
                            <span className="powerWord">wat</span>
                            <span className="preferredPower">Preferred power</span>
                        </div>
                        <div className="circB">
                            <div className="circleB"></div>
                            <div className="circleB1"></div>
                            <span className="temperatureNumber">18</span>
                            <span className="temperatureWord">С</span>
                            <span className="preferredTemperature">Preferred temperature</span>
                        </div>
                    </div>
                    <div className="nextLevel">
                        <div className="findHookahs">
                            <span className="hookahs">Find hookahs</span>
                            <select className="choice1" name="" id="">
                                <option>ENTER HOOKAHS</option>
                            </select>
                        </div>
                        <div className="nL">
                            <h1>NEXT LEVEL</h1>
                            <h2>412</h2>
                            <div className="circusLevel">
                                <div className="circusL"></div>
                                <div className="circusL1"></div>
                                <span className="timeWord1">MEGA LEVEL</span>
                                <span className="timeNumber1">560</span>
                            </div>
                        </div>
                        <div className="favoriteHookahs">
                            <h2>YOU FAVORITE</h2>
                            <div className="square"></div>
                            <ul>
                                <li><span className="title1">FAVORITE TABACCO</span></li>
                                <li><span className="name1">RAMSIDER TABACCO</span></li>
                                <li><span className="title1">FAVORITE HOOKAHS</span></li>
                                <li><span className="name2">GOLDEN HOOKAHS</span></li>
                            </ul>
                            <div className="findTabacco">
                                <span className="tabacco">Find tabacco</span>
                                <select className="choice2" name="" id="">
                                    <option>ENTER TABACCO</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <div className="info">
                            <NavLink to="/">more information</NavLink>
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
                        <span className="menu">main menu</span>
                        <span className="nikName">Tim Kaleniuk</span>
                        <span className="status">premium</span>
                        <div className="brick">
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>
                <div className="chatAll">
                    <div className="chatik">
                        <div className="headChat">
                            <div className="chatName">
                                <span>CHAT</span>
                                <span>online people</span>
                                <span>120</span>
                            </div>
                            <img className="chat" src={chat} alt=""/>
                        </div>
                        <div className="messageProfile">
                            <div className="chatAvatar">
                                <div className="circusAvatar">
                                    <NavLink to="/" className="profileLink" href=""><img src="" alt=""/></NavLink>
                                </div>
                            </div>
                            <div className="chatMessage">
                                <NavLink to="/" className="authorMessage" href=""></NavLink>
                                <span className="statusChat"></span>
                                <div className="messageContent"></div>
                            </div>
                            <div className="infoChat">
                                <div className="time">
                                    <span></span>
                                </div>
                                <div className="date">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputMessage">
                        <form action="">
                            <input type="url" placeholder="MESSAGE...."/>
                            <button><NavLink className="nameButton" to="/">SEND A MESSAGE</NavLink></button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default PersAcc;