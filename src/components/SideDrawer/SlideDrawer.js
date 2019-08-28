import React from 'react'
import './SlideDrawer.css';

const SlideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Technologies</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">Equipment (Projects)</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </nav>
        );
};





export default SlideDrawer

