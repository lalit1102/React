import React, { useState } from 'react'

const AxiosCrud = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })
  const [id,setId] = useState("")
  const [allData,setAllData] = useState([])

  const handleChange = (e) =>{
    const {name,value} = e.target 
    setData({
      ...data,
      [name]:value
    })
  }

  const saveData = (e) => {
      e.preventDefault()
      setAllData({
        ...allData,
        data
      })
  }
  return (
   <>
   <h1>axios crud </h1>
   <form action="#" method='post' name='fnm' onSubmit={saveData}>
    <label htmlFor="">name</label>
    <input type="text" name="name" id="name" value={data.name} onChange={handleChange} placeholder='enter name' /><br /><br />
    <label htmlFor="">age</label>
    <input type="number" name="age" id="age" value={data.age} onChange={handleChange} placeholder='enter age'/><br /><br />
    <label htmlFor="">salary</label>
    <input type="number" name="salary" id="salary"  value={data.salary} onChange={handleChange} placeholder='enter salary'/><br /><br />
    <button type="submit">save</button>

   </form>
   <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        allData.map((item,index)=>{
          return (
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
              </tr>
          )
        })
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </tbody>
   </table>
   </>      
  )
}

export default AxiosCrud
