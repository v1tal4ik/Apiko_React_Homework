import React from 'react';
import { ContextConsumer } from '../App/App';
import './TaskItem.css';



const TaskItem =(props)=>{
    const {id,text,isDone} = props;
     return <ContextConsumer >
            {({toggle,remove})=>(
                <li className='todo-list-item'>
                    <p className='text-content'>{text}</p>
                    <div className='control-block'>
                    <i className={isDone? 'completed fas fa-check':'fas fa-check'} onClick={()=>{toggle(id)}}></i>
                    <i className="fas fa-times" onClick={()=>{remove(id)}}></i>
                    </div>
                </li>
            )}
     </ContextConsumer>
}
export default TaskItem;