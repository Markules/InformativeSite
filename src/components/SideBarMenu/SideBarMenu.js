import React from 'react';
import './SideBarMenu.css';
import 'react-dropdown/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SideBarMenu extends React.Component{

    
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
             
            };

            this.showDropdownMenu = this.showDropdownMenu.bind(this);
            this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

        }

        showDropdownMenu(event) {
            event.preventDefault();
            this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
            });
          }
        
          hideDropdownMenu() {
            this.setState({ displayMenu: false }, () => {
              document.removeEventListener('click', this.hideDropdownMenu);
            });
        }

     

       

    render(){
        return (
            <Router>
    <header className="sideBarMenu">
        <nav className="sideBarMenu_navigation">
            <div className="sideBarMenu_navigiation_items">
                <ul>
                    <Link to={'/home'}>
                    <li onClick={this.props.onHomeButtonPress}><a href="/">Home</a></li>
                    </Link>
                         <div className="dropdown" >
                         <li onClick={this.props.onTechnologiesTMBTS2000ButtonPress} className="dropbtn"
                            >Technologies</li>
                                <div className="dropdown-content">
                                     <a href="/">TMBTS - 2000</a>
                                     <a href="/">TMBTS - 2018</a>
                                </div>
                        </div>
                    <li><a href="/">Solutions</a></li>
                    <li><a href="/">Equipment (Projects)</a></li>
                    <li><a href="/">Info</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </Router>
        )
    };
};
export default SideBarMenu