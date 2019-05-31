import React from 'react';
import {compose, withProps} from 'recompose';
import TaskItem from '../TaskItem';
import './WishList.css';

const enhance =  compose(
    withProps((props)=>({}))
)

const WishList = enhance(({arrList})=>
            <div id='todo-list-content'>
                <div id='todo-list'>
                    {
                        arrList.map(el=>(<TaskItem key={el.id} id={el.id} text={el.text} isDone={el.isDone} />))
                    }
                </div>
            </div>
)
export default WishList;