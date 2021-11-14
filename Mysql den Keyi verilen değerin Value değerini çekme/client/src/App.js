import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [ValueList,setValueList]=useState([])

  const getValue = (key)=>{
    Axios.get(`http://localhost:3001/api/get/${key}`).then((response)=>{
      setValueList(response.data)
    })  
  };
  
  function submit(){
    var x =document.getElementById("text").value;
    getValue(x)
  }
  return (
    <div className="App">
     <div className="form">
      <label>Key</label>
      <input type="text" name="review" id="text"/>
      <button onClick={submit}>Submit</button>
      {ValueList.map((val)=>{
       return(
        <div className="card">
          <h1>Key: {val.anahtar}</h1>  
          <p>Value: {val.value}</p>
        </div>
       ) 
      })
     }
     </div>
     
    </div>
  );
}

export default App;
