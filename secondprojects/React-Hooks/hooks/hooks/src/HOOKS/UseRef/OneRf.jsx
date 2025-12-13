import React, { useState,useRef } from 'react'

const OneRf = () => {
  let [count,setCount] = useState(0)
  let a = useRef(10)
  const addCounter = () => {
    setCount(count+1)
    a.current = a.current + 10 
    console.log(a)
  }
  return (
    <div>
      <div>
        <h1>useReff hooks</h1>
        <h2>here count of a ==== {count}</h2>
        <button onClick={addCounter}>Add Count</button>
          <h2>here set a value of A is {a.current}</h2>

      </div>
    </div>
  )
}

export default OneRf
