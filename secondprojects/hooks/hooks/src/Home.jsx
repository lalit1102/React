import React, { useRef } from 'react'
import { useState } from 'react'

const Home = () => {
  let [count,setCount] = useState(0)
  // let a = 10
  let a = useRef(10)

  const addCounter = () => {
    setCount(count +1)
    a.current += 1
    console.log(a)
  }
  return (
    <>
    {/* withought re rending and mutable value ne change karva mate thay che */}
      <h3>Home component called....</h3>
      <h4>use Ref Hooks Example</h4>
      <h4>Count is---{count}</h4>
      {/* <h4>A is---{a}</h4> */}
      <h4>A is---{a.current}</h4>
      <button onClick={addCounter}>add</button>
    </>
  )
}

export default Home
