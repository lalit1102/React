import React, { useState } from 'react'
import "./Custom.css"

const Stateexample = () => {
  const [count,setCount] = useState(10)
  const [name,setName] = useState("abc")
  const addCount = () => {
    setCount(count+1)
  }
  const addName = ()=>{
    setName(prompt())
  }
  const myStyle = {
    color:"blue",
    backgroundColor:"red"
  }

  return (
    <>
    <div>
      <span><h1 style={{color:"red",backgroundColor:"yellow",}}>State example</h1></span>
      <h4 style={{color:"green"}}>count is =={count}</h4>
      <h4 style={myStyle}> Name is =={name}</h4>
      <button onClick={addCount} style={{padding:10,marginRight:15, backgroundColor:"blue", color:"white"}}>Add Counter</button>
      <button onClick={addName}  style={{padding:10,marginRight:15, backgroundColor:"blue", color:"002"}}>Change Name</button>
    </div>
    <div className="box"></div>
</>
  )

}

export default Stateexample
