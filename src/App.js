import React, {Component} from 'react';
import MenuManager from './components/MenuManager/MenuManager';
import ContentTab from './components/ContentTab/ContentTab';


class App extends Component {
  
  render(){
    return(
      <div>
 <div>
  <MenuManager />
  </div>
  <div>
  <ContentTab/>
  </div>
  </div>
    )}
}
export default App;
