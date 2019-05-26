import React,{Component} from 'react';
import { connect } from 'react-redux';
import {changeCurrentMode} from '../../modules/actions';
import './Menu.css';

class Menu extends Component {

    handleChangeCurrentMode=(e)=>{
      const {changeCurrentMode} = this.props;
      changeCurrentMode(e.target.name);
    }
      render(){
        return (
            <div id="menu">
              <button className='route' onClick={this.handleChangeCurrentMode} name='all'>All</button>
              <button className='route' onClick={this.handleChangeCurrentMode} name='new'>New</button>
              <button className='route' onClick={this.handleChangeCurrentMode} name='completed'>Completed</button>
            </div>
        )
    }
}

export default connect(null,{changeCurrentMode})(Menu);

