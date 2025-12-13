import React, { useCallback, useState } from 'react'
import Display from './Display'

const UseCallback = () => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data,setData] =  useState({
    name:"",
    age:"",
    salary:""
  })
  const handlechange = (e) => {
    const{name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const saveData = useCallback((e) => {
      e.preventDefault()

      
      setAlldata([...alldata,data])
      
      setData({
        name:"",
        age:"",
        salary:""
      })
      setId("")
  },[data])


  // const deldata = (id) => {
  //   const res = alldata.filter((i,index)=> index !== id)
  //   setAlldata(res)
  // }
    
  // const editdata = (id) => {
  //   const res  =  alldata.find((i,index)=> index === id)
  //   setData(res)
  //   setId(id)
    
  // }

  // useEffect(()=>{
  //   console.log("data is value",data)
  //   console.log("alldata is value",alldata)
  // },[alldata,data])
  return (
    <div>
      <form action="#" name='fnm' method='post' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" onChange={handlechange} value={data.name} /> <br /><br />
        <label htmlFor="">age</label>
        <input type="text" name="age" id="age" onChange={handlechange} value={data.age} /><br /><br />
        <label htmlFor="">salary</label>
        <input type="text" name="salary" id="salary" onChange={handlechange} value={data.salary} /><br /><br />
        <button>save</button>
      </form>
      <div>
       <Display alldata={alldata} />
      </div>
    </div>
  )
}

export default UseCallback
