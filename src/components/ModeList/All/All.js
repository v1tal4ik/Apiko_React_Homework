import React from 'react';
import WishList from '../../WishList';
import {compose, withStateHandlers,withProps} from 'recompose';
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

const All = enhance(({add,toggle,remove,arrList,inputValue,handleChangeInput})=>
                <>
                <input type="text" className="input" value ={inputValue} onChange={(e)=>handleChangeInput(e.target.value)}/>
                <button className="add-btn" onClick={()=>{add(inputValue); handleChangeInput('') }}>Add</button>
                <WishList arrList={arrList} toggle={toggle} remove={remove}/>
                </>
)
export default All;


// class All extends Component{
//     state={
//         inputValue:''
//     }
//     handleChangeInput=(e)=>(this.setState({inputValue:e.target.value}));

//     render(){
//         const {add,toggle,remove,arrList} = this.props;
//         return (
        //    <>
        //    <input type="text" className="input" value ={this.state.inputValue}onChange={this.handleChangeInput}/>
        //    <button className="add-btn" onClick={()=>{add(this.state.inputValue); this.setState({inputValue:''})}}>Add</button>
        //     <WishList arrList={arrList} toggle={toggle} remove={remove}/>
        //    </>
//         )
//     }
// }

// export default All;