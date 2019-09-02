import React, { Component } from 'react';
import MenuManager from './components/MenuManager/MenuManager';
import ContentTab from './components/ContentTab/ContentTab';
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {
    return (
      <div>
        <div>
          <MenuManager />
        </div>
        <div>
          <ContentTab />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    )
  }
}
export default App;
