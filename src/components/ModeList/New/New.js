import React from 'react';
import WishList from '../../WishList';


export default function New ({toggle,remove,arrList}){
    const arrListCompleted = arrList.filter(item=>(!item.isDone));
    return (
        <WishList arrList={arrListCompleted} remove={remove} toggle={toggle}/>
    )
}