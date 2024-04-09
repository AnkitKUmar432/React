import React from 'react'
import { useState } from 'react';


function Todolist() {
    const [input, setInput] = useState();
    const [data, setData] = useState([]);
    
    const funct1=(e)=>{
  
      setInput(e.target.value);
    }
    const add=()=>{
      setData([...data, input]);
      setInput('');
    }
    const dataDel=(b)=>{
        let newData = data.filter((val,index)=>{
            return index!=0;
        })
    setData(newData)

    }
    return(
  
    <div>
      <input name='input' value={input} onChange={funct1} type='text' placeholder='Enter Your text'/>
      <button onClick={add}>Add</button>
     {
      data.map((a,b,c)=>{
        return(
          <>
          <li>{a}</li>
          <button onClick={()=>{dataDel(b)}}>{a}</button>
          </>
        )
      })
     }
    
    </div>
  
  
    )
}

export default Todolist