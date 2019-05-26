import React,{Component} from 'react';
import { connect } from 'react-redux';
import {editOneFromTaskList,removeOneFromTaskList} from '../../modules/actions';
import './TaskItem.css';



class TaskItem extends Component{
   
        render(){
        const {id,text,isDone}= this.props;
        return(
            <li className='todo-list-item'>
                <p className='text-content'>{text}</p>
                <div className='control-block'>
                <i className={isDone? 'completed fas fa-check':'fas fa-check'} data-id={id} onClick={this.callEditFunc}></i>
                <i className="fas fa-times"></i>
                </div>
            </li>
        )
    }
}

export default connect(null,{editOneFromTaskList,removeOneFromTaskList})(TaskItem);