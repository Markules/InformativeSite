import React from 'react';
import './SideBarMenu.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


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
    <header className="sideBarMenu">
        <nav className="sideBarMenu_navigation">
            <div className="sideBarMenu_navigiation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                         <div  className="dropdown" >
                         <div className="button" onClick={this.showDropdownMenu}>Technologies</div>
                         { this.state.displayMenu ? (
                        <ul>
                            <li><a href="/">TMBTS - 2000</a></li>
                            <li><a href="/">TMBTS - 2018</a></li>
                        </ul>
                        ):
                        (
                            null
                        )
                         }
                        </div>
                    </li>
                    
                    <li><a href="/">Solutions</a></li>
                    <li><a href="/">Equipment (Projects)</a></li>
                    <li><a href="/">Info</a></li>
                </ul>
            </div>
        </nav>
    </header>
        )
    };
};
export default SideBarMenu