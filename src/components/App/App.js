import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import {addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList} from '../../modules/actions';
import {getTaskList,getCurrentMode} from '../../modules/reducers';
import Menu from '../Menu';
import All from '../ModeList/All';
import Completed from '../ModeList/Completed/Completed';
import New from '../ModeList/New/New';
import './App.css';

export const {
    Consumer:ContextConsumer,
    Provider:ContextProvider
  } = React.createContext('');


class App extends Component{
    state={
        observer:0
    }
    handleAddTask=(value)=>{
        const {addOneFromToTaskList}=this.props;
        const obj ={
            id:Math.floor(Math.random()* 1000000),
            text:value,
            isDone:false
        }
        addOneFromToTaskList(obj);
    } 
    
    handleToggleStatusTask=(id)=>{
        const {editOneFromTaskList} = this.props;
        editOneFromTaskList(id);
        this.setState({observer:Math.random()});
    }

    handleRemoveTask=(id)=>{
        const {removeOneFromTaskList} = this.props;
        removeOneFromTaskList(id);
        this.setState({observer:Math.random()});
    }

    render(){
        const {taskList,currentMode} = this.props;
        return (
            <ContextProvider value={{
                toDoList:taskList,
                add:this.handleAddTask,
                toggle:this.handleToggleStatusTask,
                remove:this.handleRemoveTask
                }} >
                <div id='container'>
                    {currentMode === 'all'? <All />: null}
                    {currentMode === 'new'? <New />: null}
                    {currentMode === 'completed'? <Completed />: null}
                    <Menu />
                </div>
        </ContextProvider>
        )
    }
}

export default connect(state=>({
    taskList:getTaskList(state),
    currentMode:getCurrentMode(state)
}),{addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList})(App);