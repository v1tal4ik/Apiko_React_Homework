import React,{Component} from 'react';
import TaskItem from '../TaskItem';
import './WishList.css';

class WishList extends Component {
    render(){
        const{arrList,toggle,remove} =this.props;
        return(
            <div id='todo-list-content'>
                <div id='todo-list'>
                    {
                        arrList.map(el=>(<TaskItem key={el.id} id={el.id} text={el.text} isDone={el.isDone} toggle={toggle} remove={remove} />))
                    }
                </div>
            </div>
        )
    }
}

export default WishList;