import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import {addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList} from '../../modules/actions';
import {getCurrentMode} from '../../modules/reducers';
import Menu from '../Menu';
import All from '../ModeList/All';
import Foo from '../ModeList/All';
import Completed from '../ModeList/Completed/Completed';
import New from '../ModeList/New/New';
import './App.css';


export const {
    Consumer:ContextConsumer,
    Provider:ContextProvider
  } = React.createContext('');

class App extends Component{
    
    handleAddTask=()=>{
        const {addOneFromToTaskList} = this.props;
        const newTask ={
            id:Math.floor(Math.random()* 1000000),
            text:this.state.inputValue,
            isDone:false
        }
        addOneFromToTaskList(newTask);
    }
    
    callEditAction=(e)=>{
        const {editOneFromTaskList} = this.props;
        const id = e.target.getAttribute('data-id');
        editOneFromTaskList(+id);
    }
    render(){
        return (
            <ContextProvider value={'lalala'}>
                <Foo />
                <Menu />
            </ContextProvider>
        )
    }
}


export default App;
// export default connect(state=>({
//     currentMode:getCurrentMode(state)
// }),{addOneFromToTaskList,editOneFromTaskList,removeOneFromTaskList})(App);




/*
{currentMode === 'all'? <All />: null}
                    {currentMode === 'new'? <New />: null}
                    {currentMode === 'completed'? <Completed />: null}
                    */