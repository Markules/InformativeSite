import React, {Component} from 'react';
import Toolbar from '../toolbar/Toolbar';
import SlideDrawer from '../SideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import SideBarMenu from '../SideBarMenu/SideBarMenu'


class MenuManager extends Component {

    state = {
        sideDrawerOpen: false,
        home: false,
        technologiesTMBTS2000: false,
      };
      
      drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
       });
      };
      
      backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
      };

      onHomeButtonPress = (e) => {
        e.preventDefault();
        this.setState({home: true});
        alert('home:' + this.state.home)
    };

    onTechnologiesTMBTS2000ButtonPress  = (e) => {
      e.preventDefault();
      this.setState({technologiesTMBTS2000: true});
      alert('TMBTS2000:' + this.state.technologiesTMBTS2000)
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
            <SideBarMenu 
            onHomeButtonPress={this.onHomeButtonPress}
            onTechnologiesTMBTS2000ButtonPress={this.onTechnologiesTMBTS2000ButtonPress}
            />

            </main>
          </div>
        );
    }
}

export default MenuManager;