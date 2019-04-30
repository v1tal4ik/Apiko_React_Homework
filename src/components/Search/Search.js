import React from 'react';
import {ContextConsumer} from '../App/App';
import './style.css';

const ButtonMore = ()=>(
    <ContextConsumer >
       {({changeInput})=>(
      <input type='text' className='search-inp' name='search' placeholder='title or body...' onChange={changeInput}/>
    )}
    </ContextConsumer>
  )
export default ButtonMore;
