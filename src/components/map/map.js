import React from "react";
import './map.css';
import '../../fonts/stylesheet.css';
import layer from '../../img/jpg/Layer7.jpg'
import setting from '../../img/png/SETTINGS_48x48-32.png';
import speaker from '../../img/png/qqq.png'
import logo from '../../img/png/logo-ramsmobile.png'
import tel from '../../img/png/тел copy.png'
import logotip from '../../img/png/logotip.png'
import {NavLink} from "react-router-dom";
import {YMaps, Map, ListBox, ListBoxItem, Placemark} from 'react-yandex-maps';


const mapState = {center: [55.741570, 37.677226], zoom: 18, controls: []};

const hookahs = [
    {
        data: {content: 'GOLDEN HOOKAHS'},
        options: { selectOnClick: false },
        coords: [55.741686, 37.676396],
    },
    {
        data: {content: 'MIDDLE HOOKAHS'},
        options: { selectOnClick: false },
        coords: [55.741745, 37.677646],
    },
    {
        data: {content: 'ROBOHOOKAHS'},
        options: { selectOnClick: false },
        coords: [55.741029, 37.677697],
    },
];


class Mapp extends React.Component {
    state = mapState;

    onItemClick = coords => {
        this.setState({center: coords});
    };

    render() {
        return (
            <body>
            <div className="rightHalf">
                <div className="mainWindow">
                    <div className="headerMap">
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
                    <div className="titleMap">
                        <h1>GOLDEN HOOKAHS</h1>
                        <h2>ADVERTISING</h2>
                    </div>
                    <div className="codMap">
                        <YMaps>
                            <Map state={this.state} width="100%" height="100%">
                                <ListBox data={{content: 'Choose hookahs'}}>
                                    {hookahs.map(hookahs =>
                                        <ListBoxItem
                                            data={hookahs.data}
                                            options={hookahs.options}
                                            onClick={() => this.onItemClick(hookahs.coords)}
                                            key={hookahs.data.content}
                                        />
                                    )}
                                </ListBox>
                            </Map>
                        </YMaps>;
                    </div>
                    <div className="footerMap">
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
                        <span className="nikNameMap">Tim Kaleniuk</span>
                        <span className="statusMap">premium</span>
                    </div>
                </div>
                <div className="listHookahs">
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
                                <button><NavLink className="nameButton" to="/hook">ORDER A HOOKAHS</NavLink></button>
                            </div>
                        </div>
                        <div className="hookahsBlock2">
                            <div className="nameHookahs">
                                <span>MIDDLE HOOKAHS</span>
                                <span>HOOKAHS</span>
                            </div>
                            <div className="infoText">
                                <p>Bolshaya Andronievskaya street, 23 8 <br/>
                                    Floor, attic; end entrance <br/>
                                    Moscow, Russia, 109147</p>
                            </div>
                            <div className="ratingArea2">
                                <input type="radio" id="star4" name="rating" value="4"/>
                                <label htmlFor="star4" title="Оценка 4"></label>
                                <input type="radio" id="star5" name="rating" value="5"/>
                                <label htmlFor="star5" title="Оценка 5"></label>
                                <input type="radio" id="star6" name="rating" value="6"/>
                                <label htmlFor="star6" title="Оценка 6"></label>
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
                                <button><NavLink className="nameButton" to="/">ORDER A HOOKAHS</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Mapp;