import React from 'react';
import {compose, withProps} from 'recompose';
import TaskItem from '../TaskItem';
import './WishList.css';

const enhance =  compose(
    withProps((props)=>{
        //console.log(props);
        return {};
    })
)

const WishList = enhance(({toggle,remove,arrList})=>
            <div id='todo-list-content'>
                <div id='todo-list'>
                    {
                        arrList.map(el=>(<TaskItem key={el.id} id={el.id} text={el.text} isDone={el.isDone} toggle={toggle} remove={remove}/>))
                    }
                </div>
            </div>
)
export default WishList;

// class WishList extends Component {
//     render(){
//         const{toggle,remove,arrList} =this.props;
//         return(
            // <div id='todo-list-content'>
            //     <div id='todo-list'>
            //         {
            //             arrList.map(el=>(<TaskItem key={el.id} id={el.id} text={el.text} isDone={el.isDone} toggle={toggle} remove={remove}/>))
            //         }
            //     </div>
            // </div>
//         )
//     }
// }

// export default WishList;