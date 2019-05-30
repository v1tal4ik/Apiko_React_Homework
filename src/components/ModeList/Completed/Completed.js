import React from 'react';
import { ContextConsumer } from '../../App/App';
import WishList from '../../WishList';


 const Completed=()=>(
    <ContextConsumer >
        {({toDoList})=>{
            const arrListCompleted = toDoList.filter(item=>(item.isDone));
            return <WishList arrList={arrListCompleted} />
        }}
    </ContextConsumer>
 )


export default Completed;