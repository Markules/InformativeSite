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
                <li><a href="/">Home</a></li>
                <li><a href="/">Technologies</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">Equipment (Projects)</a></li>
                <li><a href="/">Info</a></li>
                </ul>
            </div>
        </nav>
    </header>
)  


export default Toolbar
