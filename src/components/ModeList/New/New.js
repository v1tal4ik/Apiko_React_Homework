import React from 'react';
import WishList from '../../WishList';
import {compose,withProps} from 'recompose';



const enhance = compose(
    withProps((props)=>({
        arrListNew:props.arrList.filter(item=>(!item.isDone))
    }))
)

const Completed = enhance(({toggle,remove,arrListNew})=>
        <WishList arrList={arrListNew} remove={remove} toggle={toggle}/>
)
export default Completed;


// export default function New ({toggle,remove,arrList}){
//     const arrListCompleted = arrList.filter(item=>(!item.isDone));
//     return (
//         <WishList arrList={arrListCompleted} remove={remove} toggle={toggle}/>
//     )
// }