
import React, { useEffect, useState } from 'react'


const LifecycleFunction = () => {
  const [name,setName] = useState("kenil")
    useEffect(()=>{
        setTimeout(()=>{
            setName("lalit baldaniya")
        },3000)
    },[])

  return (
    <div>
      <h3>Function  LifeCycle Example</h3>
        <h4>Name is: {name}</h4>

    </div>
  )
}

export default LifecycleFunction
