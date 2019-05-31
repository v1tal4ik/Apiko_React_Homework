import React from 'react';
import PropTypes from 'prop-types';
import {compose,withProps,getContext} from 'recompose';
import WishList from '../../WishList';


const enhance = compose(
    withProps((props)=>(
        {
            arrListCompleted:props.toDoList.filter(item=>(item.isDone))
        }
    ))
)

const ComponentCompleted = enhance(({arrListCompleted})=>
        <WishList arrList={arrListCompleted} />
)

const Completed = getContext({toDoList:PropTypes.array})(ComponentCompleted);
export default Completed;