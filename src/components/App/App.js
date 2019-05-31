import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import {compose,withStateHandlers, withContext} from 'recompose';
import Menu from '../Menu';
import All from '../ModeList/All';
import Completed from '../ModeList/Completed/Completed';
import New from '../ModeList/New/New';
import './App.css';


 export const AppContextPropTypes = {
    toDoList:PropTypes.array,
    handleAddTask:PropTypes.func,
    handleToggleStatusTask:PropTypes.func,
    handleRemoveTask:PropTypes.func
}

const enhance = compose(
    withStateHandlers(
        ({initialValue=[]})=>({
            toDoList:initialValue
        }),
       {
        handleAddTask:(state)=>(value)=>{
            state.toDoList.push({
                id:Math.floor(Math.random()* 1000000),
                text:value,
                isDone:false
            })
        },
        handleToggleStatusTask:(state)=>(id)=>{
            state.toDoList.forEach((el)=>{
                if(el.id === id){
                    el.isDone = el.isDone ? false:true;
                }
            });
            return state.toDoList;
        },
        handleRemoveTask:(state)=>(id)=>{
            state.toDoList.forEach((el,index)=>(el.id===id) ? state.toDoList.splice(index,1): null);
            return state.toDoList;
        }
       }
    ),
    withContext(
        AppContextPropTypes,
        ({toDoList,handleAddTask,handleToggleStatusTask,handleRemoveTask})=>({
            toDoList,
            handleAddTask,
            handleToggleStatusTask,
            handleRemoveTask
        })
        )
)


const App = enhance(()=>
    <BrowserRouter>
    <div id='container'>
        <Switch>
            <Route path='/' component = {All} exact />
            <Route path='/new' component = {New} exact />
            <Route path='/completed' component = {Completed} exact />
            <Redirect to='/' />
        </Switch>
        <Menu />
    </div>
    </BrowserRouter>
)
export default App;