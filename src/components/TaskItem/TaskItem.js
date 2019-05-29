import React from 'react';
import {compose, withProps} from 'recompose';
import './TaskItem.css';

const enhance =  compose(
    withProps((props)=>{})
)

const TaskItem = enhance(({id,text,isDone,toggle,remove})=>
            <li className='todo-list-item'>
                 <p className='text-content'>{text}</p>
                 <div className='control-block'>
                 <i className={isDone? 'completed fas fa-check':'fas fa-check'} onClick={()=>toggle(id)}></i>
                 <i className="fas fa-times" onClick={()=>{remove(id)}}></i>
                 </div>
            </li>
)
export default TaskItem;
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