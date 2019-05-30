import React ,{ Component }from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
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
        toDoList:[]
    }
    

    handleAddTask=(value)=>{
        this.state.toDoList.push({
            id:Math.floor(Math.random()* 1000000),
            text:value,
            isDone:false
        });
    } 
    
    handleToggleStatusTask=(id)=>{
        const {toDoList:arr} = this.state;
        arr.forEach((el)=>{
            if(el.id === id){
                el.isDone= el.isDone ? false:true;
            }
        });
        this.setState({toDoList:arr});
    }

    handleRemoveTask=(id)=>{
        const {toDoList:arr} = this.state;
        arr.forEach((el,index)=>(el.id===id) ? this.state.toDoList.splice(index,1): null);
        this.setState({toDoList:arr});
    }

    render(){
        return (
            <ContextProvider value={{
                    toDoList:this.state.toDoList,
                    add:this.handleAddTask,
                    toggle:this.handleToggleStatusTask,
                    remove:this.handleRemoveTask
                    }} >
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
            </ContextProvider>
        )
            
    }
}

export default App;