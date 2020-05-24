import React from "react";
import './hookahs.css';
import '../../fonts/stylesheet.css';
import layer from '../../img/jpg/Layer7.jpg';
import setting from '../../img/png/SETTINGS_48x48-32.png';
import speaker from '../../img/png/qqq.png'
import logo from '../../img/png/logo-ramsmobile.png'
import tel from '../../img/png/тел copy.png'
import {NavLink} from "react-router-dom";

class Hook extends React.Component {
    render() {
        return (
            <body>
            <div className="rightHalf">
                <div className="mainWindow">
                    <div className="headerHookahs">
                        <div className="layer"><img src={layer} alt="/"/></div>
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
                    <div className="allInfoHookahs">
                        <div className="scrollInfo">
                            <div className="advertisingHookahs">
                                <div className="nameHookah">
                                    <h2>GOLDEN HOOKAHS</h2>
                                </div>
                                <div className="advertising">
                                    <h3>ADVERTISING</h3>
                                </div>
                                <div className="advertisingText">
                                    <p>The European Data Protection Board (the ‘Board’) is hereby established as a body of the Union and shall have<br/> legal personality.<br/>
                                        The Board shall be represented by its Chair.<br/>
                                        The Board shall be composed of the head of one supervisory authority of each Member State and of the European <br/> Data Protection Supervisor, or their respective representatives. <br/>
                                        Where in a Member State more than one supervisory authority is responsible for monitoring the application <br/> of the provisions pursuant to this Regulation, a joint representative shall be appointed in accordance with <br/> that Member State’s law. <br/>
                                        1The Commission shall have the right to participate in the activities and meetings of the Board without voting <br/> right. 2The Commission shall designate a representative. 3The Chair of the Board shall communicate to the <br/> Commission the activities of the Board. <br/>
                                        In the cases referred to in Article 65, the European Data Protection Supervisor shall have voting rights only <br/> on decisions which concern principles and rules applicable to the Union institutions, bodies, offices and <br/> agencies which correspond in substance to those of this</p>
                                </div>
                            </div>
                        </div>
                        <div className="orderHookahs">
                            <button><NavLink to="/">ORDER A HOOKAHS</NavLink></button>
                        </div>
                    </div>
                    <div className="footerHook">
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
                        <span className="nikNameHook">Tim Kaleniuk</span>
                        <span className="statusHook">premium</span>
                    </div>
                </div>
                <div className="infoAll">
                    <div className="scrollList">
                        <div className="hookahsBlock1">
                            <div className="nameHookahs">
                                <span>GOLDEN HOOKAHS</span>
                                <span>HOOKAHS</span>
                            </div>
                            <div className="infoText">
                                <p>Bolshaya Andronievskaya street, 23 8 <br/>
                                    Floor, attic; end entrance <br/>
                                    Moscow, Russia, 109147</p>
                            </div>
                            <div className="ratingArea1">
                                <input type="radio" id="star1" name="rating" value="1"/>
                                <label htmlFor="star1" title="Оценка 1"></label>
                                <input type="radio" id="star2" name="rating" value="2"/>
                                <label htmlFor="star2" title="Оценка 2"></label>
                                <input type="radio" id="star3" name="rating" value="3"/>
                                <label htmlFor="star3" title="Оценка 3"></label>
                            </div>
                            <div className="infoHookahs">
                                <span>electronic hookahs</span>
                                <span>12</span>
                            </div>
                            <div className="telInfo">
                                <img className="tel" src={tel} alt=""/>
                                <span>+7 495 162-67-62</span>
                            </div>
                            <div className="order">
                                <button><NavLink to="/">ORDER A HOOKAHS</NavLink></button>
                            </div>
                        </div>
                        <div className="review">
                            <div className="reviewBlock">
                                <div className="reviewCircle">
                                    <div className="circleRev"></div>
                                    <div className="circleRev"></div>
                                    <div className="circleRev"></div>
                                </div>
                                <div className="reviewSquare">
                                    <div className="squareRev"></div>
                                    <div className="squareRev"></div>
                                    <div className="squareRev"></div>
                                </div>
                            </div>
                            <div>
                                <h4>REVIEWS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Hook;