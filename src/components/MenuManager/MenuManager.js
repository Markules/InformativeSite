import React, {Component} from 'react';
import Toolbar from '../toolbar/Toolbar';
import SlideDrawer from '../SideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import SideBarMenu from '../SideBarMenu/SideBarMenu'


class MenuManager extends Component {

    state = {
        sideDrawerOpen: false
      };
      
      drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
       });
      };
      
      backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
      };
      
       render(){ 
         let backdrop;
      
         if (this.state.sideDrawerOpen){
           backdrop = <Backdrop click={this.backdropClickHandler} />
         }
        return (
          <div style={{height: '100%'}}>
            <Toolbar drawerToggleClickHandler ={this.drawerToggleClickHandler} />
            <SlideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main style={{marginTop: '64px'}}>
            <SideBarMenu />

            </main>
          </div>
        );
    }
}

export default MenuManager;