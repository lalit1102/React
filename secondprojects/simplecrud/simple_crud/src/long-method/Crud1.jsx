import React from 'react'
import { useState } from 'react'

const Crud1 = () => {
  
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data,setData] = useState({
    name:""
  })
  const handlechange = (e) => {
    const {name,value} = e.target
     console.log("New  saved data:", data);
    setData({
      ...data,
      [name]:value
    })
  }
  const saveData = (e) => {
    console.log("New entry being saved:", data);
      e.preventDefault()

      if(id !== ""){
        const res = alldata.map((i,index)=>(id == index)?data:i)
      setAlldata(res)
     
      } 
      else {

      setAlldata([...alldata,data])
      }
      setId("")
      setData({
        name:""
      })
  }
  const deldata = (id) => {
      const res = alldata.filter((i,index)=>index !== id)
      
      setAlldata(res)
      console.log( "here delete data",res);
  }
  // console.log(deldata(1))
  const editdata = (id) => {
    const res = alldata.find((i,index)=> index === id)
    setData(res)
    console.log("here edit data",res);
    
    setId(id)
  }

  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">name:</label>
        <input type="text" name="name" id="name"  value={data.name} onChange={handlechange}/>
        <button type='submit'>save</button>
      </form>
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i,index)=>{
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td><button onClick={()=>deldata(index)}> delete</button></td>
                    <td><button onClick={()=>editdata(index)}> Edit</button></td>
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

export default Crud1
