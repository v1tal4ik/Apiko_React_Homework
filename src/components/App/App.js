import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import {addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList} from '../../modules/actions';
import {getTaskList,getCurrentMode} from '../../modules/reducers';
import Menu from '../Menu';
import All from '../ModeList/All';
import Completed from '../ModeList/Completed/Completed';
import New from '../ModeList/New/New';
import './App.css';




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
            <div id='container'>
                {currentMode === 'all'? 
                    <All arrList={taskList} add={this.handleAddTask} toggle={this.handleToggleStatusTask} remove={this.handleRemoveTask} />: null}
                {currentMode === 'new'? <New arrList={taskList} toggle={this.handleToggleStatusTask} remove={this.handleRemoveTask}/>: null}
                {currentMode === 'completed'? <Completed arrList={taskList} toggle={this.handleToggleStatusTask} remove={this.handleRemoveTask}/>: null}
                <Menu />
            </div>
        )
    }
}

export default connect(state=>({
    taskList:getTaskList(state),
    currentMode:getCurrentMode(state)
}),{addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList})(App);