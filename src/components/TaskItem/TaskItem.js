import React from 'react';
import PropTypes from 'prop-types';
import {compose, withProps, getContext} from 'recompose';
import './TaskItem.css';

const enhance =  compose(
    withProps((props)=>{})
)

const ComponentTaskItem = enhance(({id,text,isDone,handleToggleStatusTask,handleRemoveTask})=>(
    <li className='todo-list-item'>
        <p className='text-content'>{text}</p>
        <div className='control-block'>
            <i className={isDone? 'completed fas fa-check':'fas fa-check'} onClick={()=>handleToggleStatusTask(id)}></i>
            <i className="fas fa-times" onClick={()=>{handleRemoveTask(id)}}></i>
        </div>
    </li>
)
            
)

const TaskItem = getContext(
    {
    handleToggleStatusTask:PropTypes.func,
    handleRemoveTask:PropTypes.func
    }
)(ComponentTaskItem)

export default TaskItem;




/*
{id,text,isDone,toggle,remove}



*/

// const TaskItem = ({id,text,isDone,toggle,remove})=>(
            // <li className='todo-list-item'>
            //      <p className='text-content'>{text}</p>
            //      <div className='control-block'>
            //      <i className={isDone? 'completed fas fa-check':'fas fa-check'} onClick={()=>toggle(id)}></i>
            //      <i className="fas fa-times" onClick={()=>{remove(id)}}></i>
            //      </div>
            // </li>
// )
// export default TaskItem;


// class TaskItem extends Component{
//     render(){
//         const {id,text,isDone,toggle,remove}= this.props;
//         return(
//             <li className='todo-list-item'>
//                 <p className='text-content'>{text}</p>
//                 <div className='control-block'>
//                 <i className={isDone? 'completed fas fa-check':'fas fa-check'} onClick={()=>toggle(id)}></i>
//                 <i className="fas fa-times" onClick={()=>{remove(id)}}></i>
//                 </div>
//             </li>
//         )
//     }
// }

// export default TaskItem;