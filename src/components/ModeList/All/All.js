import React ,{ Component }from 'react';
import WishList from '../../WishList';
import { ContextConsumer } from '../../App/App';
import './All.css';




class All extends Component{
    state={
        inputValue:''
    }
    handleChangeInput=(e)=>(this.setState({inputValue:e.target.value}));

    render(){
       return <ContextConsumer >
            {({toDoList,add})=>(
                 <>
                <input type="text" className="input" value ={this.state.inputValue}onChange={this.handleChangeInput}/>
                <button className="add-btn" onClick={()=>{add(this.state.inputValue); this.setState({inputValue:''})}}>Add</button>
                <WishList arrList={toDoList} />
                </>
            )}
        </ContextConsumer>
    }
}

export default All;