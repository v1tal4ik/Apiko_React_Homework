import React from 'react';
import {ContextConsumer} from '../App/App';
import './style.css';

const ButtonMore = ()=>(
  <ContextConsumer >
     {({setCounter})=>(
    <button className='more-btn' onClick={setCounter}>More</button>
  )}
  </ContextConsumer>
)

export default ButtonMore;