import React from 'react';
import { ContextConsumer } from '../../App/App';
import WishList from '../../WishList';


const New =()=>(
     <ContextConsumer >
            {({toDoList})=>{
                const arrListNew = toDoList.filter(item=>(!item.isDone));
                return <WishList arrList={arrListNew} />
            }}
     </ContextConsumer>
)

export default New;



