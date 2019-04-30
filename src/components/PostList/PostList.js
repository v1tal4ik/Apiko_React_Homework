import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from '../PostListItem';
import './style.css';


class PostList extends React.Component{
  static propTypes = {
    posts:PropTypes.array.isRequired
  }
  static defaultProps = {
    posts:[]
  }
   render(){
    const {posts} = this.props;
    if(posts.length > 0){
      return (
        <div className = 'post-list'>
           {posts.map((item)=>{
              return <PostListItem key ={item.id}  id={item.id} title={item.title} body={item.body}/>
            })}
        </div>
      )
    }else{
      return <div>На жаль збігів немає :(</div>
    }
  }
}



export default PostList;
