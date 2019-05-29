import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu =()=>(
      <div id="menu">
        <Link className='route' to='/'>All</Link>
        <Link className='route' to='/new'>New</Link>
        <Link className='route' to='/completed'>Completed</Link>
      </div>
)
 export default Menu;

// class Menu extends Component {
//       render(){
//         return (
//             <div id="menu">
//               <Link className='route' to='/'>All</Link>
//               <Link className='route' to='/new'>New</Link>
//               <Link className='route' to='/completed'>Completed</Link>
//             </div>
//         )
//     }
// }

// export default Menu;

