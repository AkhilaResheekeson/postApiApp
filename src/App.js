import React, {useState,useEffect} from "react";
import './App.css';

function App() {
  const [post,setPost]=useState([]);
  const [loading,setLoding]=useState(true);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response=>Response.json())
    .then(data=>{
      setPost(data);
      setLoding(false);
    })
    .catch(error=>{
      console.error("Error occurred while fetching...",error);
    });
  },[]);

  return (
    <div className="App">
      <h1>POSTS</h1>
      {
        loading?(
          <p>Loading...</p>
        ):(
          <ul>
            {post.map(p=>(
              <li>
                <h3>User ID: {p.id}</h3>
                <h4><u>{p.title}</u></h4>
                <p><i>{p.body}</i></p>
              </li>
            ))}
          </ul>
        )
      }
      
    </div>
  );
}

export default App;
