import { handleActions } from 'redux-actions';
import {
    addOneFromToTaskList,
    editOneFromTaskList,
    removeOneFromTaskList,
    changeCurrentMode
    } from './actions';




export const taskList = handleActions({
    [addOneFromToTaskList] : (state,action)=>{
        state.push(action.payload);
        return state;
    },
    [editOneFromTaskList] : (state,action)=>{
        state.forEach((el)=>{
            if(el.id === action.payload){
                el.isDone= el.isDone ? false:true;
            }
        });
        return state;
    },
    [removeOneFromTaskList] : (state,action)=>{
         state.forEach((el,index)=>(el.id===action.payload) ? state.splice(index,1): null);
         return state;
    },
},[]);

export const currentMode = handleActions({
    [changeCurrentMode] : (_state,action)=>action.payload,
},'all');



export const getTaskList=(state)=>state.taskList;
export const getCurrentMode=(state)=>state.currentMode;