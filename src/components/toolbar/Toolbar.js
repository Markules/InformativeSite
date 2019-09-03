import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
            <DrawerToggleButton click={props.drawerToggleClickHandler}  />
            </div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigiation_items">
                <ul>
                <div className="dropdown">   
                <li className="dropbtn"><a href="/">Home</a></li>
                <div className="dropdown-content"></div>
                </div>
                <div className="dropdown">
                    <li className="dropbtn">Technologies</li>
                        <div className="dropdown-content">
                            <a href="#">Technologies and processes - TMBTS 2000</a>
                            <a href="#">Technologies and processes - TMBTS 2018</a>
                        </div>
                </div>
                <div className="dropdown">
                <li className="dropbtn">Solutions</li>
                <div className="dropdown-content">
                            <a href="#">Solutions (List)</a>
                            <a href="#">Water Supply</a>
                            <a href="#">Sewage</a>
                            <a href="#">Waste</a>
                            <a href="#">Energy & Transport</a>
                            <a href="#">AgroTech</a>
                            <a href="#">Environmental</a>
                        </div>
                </div>
                <div className="dropdown">
                <li className="dropbtn">Equipment (Projects)</li>
                    <div className="dropdown-content">
                            <a href="#">Tornado</a>
                            <a href="#">Stainer</a>
                            <a href="#">Reactor</a>
                            <a href="#">Greenhouse</a>
                            <a href="#">Glasier</a>
                            <a href="#">Medusa</a>
                            <a href="#">Triton</a>
                            <a href="#">BIONT 2000</a>
                            <a href="#">Water Generator</a>
                    </div>
                </div>
                <div className="dropdown">
                <li className="dropbtn">Info</li>
                <div className="dropdown-content">
                            <a href="#">FAQ</a>
                            <a href="#">Articles</a>
                            <a href="#">Glossary</a>
                            <a href="#">Links</a>
                </div>
                </div>
                </ul>
            </div>
        </nav>
    </header>
)  


export default Toolbar
