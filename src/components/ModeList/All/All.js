import React from 'react';
import PropTypes from 'prop-types';
import {compose, withStateHandlers,withProps, getContext} from 'recompose';
import WishList from '../../WishList';
import './All.css';

const enhance = compose(
    withProps((props)=>({})),
    withStateHandlers(
        ({initialValue=''})=>({
            inputValue:initialValue
        }),
       {
        handleChangeInput:()=>(value)=>({
            inputValue:value
        })
       }
    )
)

const ComponentAll = enhance(({toDoList,inputValue,handleChangeInput,handleAddTask:add})=>(
    <>
    <input type="text" className="input" value ={inputValue} onChange={(e)=>handleChangeInput(e.target.value)}/>
    <button className="add-btn" onClick={()=>{add(inputValue); handleChangeInput('') }}>Add</button>
    <WishList arrList={toDoList} />
    </>
    )                 
)

const All = getContext({
    toDoList:PropTypes.array,
    handleAddTask:PropTypes.func
})(ComponentAll);


export default All;