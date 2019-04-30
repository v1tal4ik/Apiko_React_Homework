async function getPost(){
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    })
    .then((response)=>response.json())
    .then((response)=>{
        return response;
    })
    .catch((err)=>{
        return new Error('Sorry, Something work wrong!')
    })
}

export default getPost;