import React, { useState } from 'react'

const MemoExample = () => {
  const [count,setCount] = useState(0)
  const [num,setNum] = useState(10)

  const addCounter = () => {
    console.log("counter called...");
    setCount(count+1)
    
  }

  const addNumber = () => {
    console.log("number is called");
    setNum(num+10)
    
  }

  const addCalc = (count) => {
    console.log("calc called");

    for(let i=0;i<100000;i++){
      count+= i
    }
    return count
  }

  const calc = useMemo(()=>{
    return addCalc(count)
  },[count])
  return (
    <div>
      <h3>Memo example</h3>
      <h4>Count is ---{count}</h4>
      <button onClick={addCounter}>Add Count</button>
      <h4>Num is --- {num}</h4>
      <button onClick={addNumber}>Add Num</button>
      <h4>calc is --- {calc}</h4>
    </div>
  )
}

export default MemoExample
