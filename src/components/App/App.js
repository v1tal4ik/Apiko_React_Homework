import React  from 'react';
import PostList from '../PostList';
import ButtonMore from '../ButtonMore';
import Search from '../Search';
import getPost from '../../api';
import debounce from 'debounce';
import './App.css';

export const {
  Consumer:ContextConsumer,
  Provider:ContextProvider
} = React.createContext('');

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading:false,
      counter:10,
      posts:[],
      renderPosts:[],
      inputValue:''
    };
  }

  changeInput=(e)=>{
    if(e.target.value){
      this.setState({inputValue:e.target.value},()=>{
        let handleCallSearch = debounce(this.handleSearch, 500);
        handleCallSearch();
      })
    }else{
      this.changeRenderList(this.state.posts,this.state.counter);
    }
    };

  setCounter=()=>{
    if(this.state.counter === 90){
      this.setState({counter:10},()=>{this.changeRenderList(this.state.posts,this.state.counter)})
    }else{
      this.setState({counter:this.state.counter+10},()=>{this.changeRenderList(this.state.posts,this.state.counter)})
    }
  }  

  handleSearch=()=>{
    console.log('work');
    const {inputValue,posts} = this.state;
    let filter_arr = posts.filter((item)=>{return item.title.indexOf(inputValue)!==-1 || item.body.indexOf(inputValue)!==-1;});
    this.changeRenderList(filter_arr,filter_arr.length);
  }

  changeRenderList=(arr,counter)=>{
    let renderPosts = [];
    for(let i=0;i<counter;i++){renderPosts.push(arr[i])}
    this.setState({renderPosts:renderPosts});
  }
  
  async componentDidMount(){
    this.setState({isLoading:true});
    let posts = await getPost();
    this.changeRenderList(posts,this.state.counter);
    this.setState({isLoading:false,posts:posts});
  }

  render(){
    const {isLoading,renderPosts} = this.state;
    return (
      <ContextProvider value={{setCounter:this.setCounter,changeInput:this.changeInput}}>
          <Search />
          <ButtonMore />
          {isLoading ? (<div>loading...</div>):(<PostList posts={renderPosts}/>)}
      </ContextProvider>
    )
  }
}

export default  App;
