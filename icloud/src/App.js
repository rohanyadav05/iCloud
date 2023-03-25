import {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [prompt,setPrompt]= useState("");
  const[response,setResponse]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:8080/chat",{prompt}).then((res)=>{
      setResponse(res.data);
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  return (
    <>
    <form1 className='form1 py-4'>
      <div className='container text-center'>
        <div className='row align-items-start'>
        <div className='col1 col-2 my-2 '>Ask me Anything</div>
    <div className='col2 col-2 my-2'>
      <div className='col3'>
      <input type="text" className='label1' placeholder='Enter your Text'  value={prompt} onChange={
        (e)=>setPrompt(e.target.value)
      }/>
      </div>
      
      <div className='btn1 col-2 my-2'>
        <button className='btn1 btn-primary' onClick={handleSubmit}>Submit</button>
      </div>

    </div>
    <div className='card'>
        <div className='card-body'>
          <p>{response}</p>
        </div>
      </div>
        </div>
      </div>
    </form1>
    

  
    </>
  );
}

export default App;
