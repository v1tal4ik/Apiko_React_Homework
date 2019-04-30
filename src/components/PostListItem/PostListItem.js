import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PostListItem extends React.Component{
  static propTypes = {
    id:PropTypes.number,
    title:PropTypes.string,
    bode:PropTypes.string
  }
  static defaultProps = {
    id:0,
    title:'',
    body:''
  }
  render(){
     const{id,title,body} = this.props;
    return (
     <div className='list-ul'>
         {id}. {title}
         <ul>
             <li className='list-item'>{body}</li>
         </ul>
     </div>
    )
  }
}

export default PostListItem;
