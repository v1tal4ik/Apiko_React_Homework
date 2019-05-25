import React, {Component}  from 'react';
import addComponent from '../addComponent/addComponent.js';
import './App.css';


class App extends Component{
  render(){
    return (
      <div>Some text from App Component</div>
    )
  }
}





export default addComponent(App,'some');// Pass Component and mounting point [default="root"]
