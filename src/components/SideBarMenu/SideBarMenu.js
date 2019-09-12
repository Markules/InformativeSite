import React from 'react';
import './SideBarMenu.css';
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
                    <li onClick={this.props.onHomeButtonPress}>Home</li>
                    </Link>
                         <div className="dropdown" >
                         <li onClick={this.props.onTechnologiesTMBTS2000ButtonPress} className="dropbtn"
                            >Technologies</li>
                                <div className="dropdown-content">
                                    <ul>
                                     <li><a href="/">TMBTS - 2000</a></li>
                                     <li><a href="/">TMBTS - 2018</a></li>
                                     </ul>
                                </div>
                        </div>
                    <li>Solutions</li>
                    <li>Equipment (Projects)</li>
                    <li>Info</li>
                </ul>
            </div>
        </nav>
    </header>
    </Router>
        )
    };
};
export default SideBarMenu