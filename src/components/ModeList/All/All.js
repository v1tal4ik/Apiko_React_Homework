import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import {addOneFromToTaskList} from '../../../modules/actions';
import {getTaskList} from '../../../modules/reducers';
import ContextConsumer from '../../App';
import WishList from '../../WishList';
import './All.css';


const Foo = ()=>(
    <ContextConsumer >
      {value => <div>lalalalalal</div>}
    </ContextConsumer>
  )
  
  export default Foo;

class All extends Component{
    state={
        inputValue:''
    }
    handleChangeInput=(e)=>(this.setState({inputValue:e.target.value}));

    render(){
        const {taskList} = this.props;
        return (
            <Foo />
        )
    }
}


//export default Foo;

// export default connect(state=>({
//     taskList:getTaskList(state),
// }),{addOneFromToTaskList})(All);

/*

        // for(let i=0; i<100;i++){
        //     let newtask ={
        //         id:Math.floor(Math.random()* 1000000),
        //         text:this.state.inputValue,
        //         isDone:false
        //     }
        //     addOneFromToTaskList(newtask);
        // }

        <>
           <input type="text" className="input" value ={this.state.inputValue} onChange={this.handleChangeInput} />
           <button className="add-btn" onClick={this.handleAddTask} >Add</button>
            <WishList arrList={taskList} />
        </>
        */