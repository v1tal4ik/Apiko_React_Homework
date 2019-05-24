import React ,{ Component }from 'react';
import WishList from '../../WishList';
import './All.css';




class All extends Component{
    state={
        inputValue:''
    }
    handleChangeInput=(e)=>(this.setState({inputValue:e.target.value}));

    render(){
        const {add,toggle,remove,arrList} = this.props;
        return (
           <>
           <input type="text" className="input" value ={this.state.inputValue}onChange={this.handleChangeInput}/>
           <button className="add-btn" onClick={()=>{add(this.state.inputValue); this.setState({inputValue:''})}}>Add</button>
            <WishList arrList={arrList} toggle={toggle} remove={remove}/>
           </>
        )
    }
}

export default All;