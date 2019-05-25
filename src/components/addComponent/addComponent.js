import React, {Component}  from 'react';
import ReactDOM from 'react-dom';


export default function addComponent(WrappedComponent,id='root'){
  return class extends Component{
    constructor(props){
      super(props);
      this.id = id;
      
      //create mounting point
      if(!(id==='root')){
        this.div = document.createElement('div');
        this.div.id = this.id;
        document.body.insertAdjacentElement('afterbegin',this.div);
      }
    }
    render(){
      return ReactDOM.createPortal(<WrappedComponent />,document.getElementById(this.id));
    }
  }
}
