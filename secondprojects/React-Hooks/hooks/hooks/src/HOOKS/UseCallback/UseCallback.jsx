import React, { useEffect, useState } from 'react'

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

  const saveData = (e) => {
      e.preventDefault()

      if (id !== "") {
        const res =  alldata.map((i,index)=> (id==index)?data:i)
        setAlldata(res)
      } else {
      setAlldata([...alldata,data])
      }
      setData({
        name:"",
        age:"",
        salary:""
      })
      setId("")
  }


  const deldata = (id) => {
    const res = alldata.filter((i,index)=> index !== id)
    setAlldata(res)
  }
    
  const editdata = (id) => {
    const res  =  alldata.find((i,index)=> index === id)
    setData(res)
    setId(id)
    
  }

  useEffect(()=>{
    console.log("data is value",data)
    console.log("alldata is value",alldata)
  },[alldata,data])
  return (
    <div>
      <form action="#" name='fnm' method='post' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" onChange={handlechange} value={data.name} /> <br /><br />
        <label htmlFor="">age</label>
        <input type="text" name="age" id="age" onChange={handlechange} value={data.age} /><br /><br />
        <label htmlFor="">salary</label>
        <input type="text" name="salary" id="salary" onChange={handlechange} value={data.salary} /><br /><br />
        <button>{id === "" ? "save" :"update"}</button>
      </form>
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>salary</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i,index)=>{
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <button onClick={()=>editdata(index)}>Edit</button>
                      <button onClick={()=>deldata(index)}>delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UseCallback
