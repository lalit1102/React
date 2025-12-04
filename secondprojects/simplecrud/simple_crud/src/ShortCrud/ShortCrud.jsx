import React, { useState,useEffect } from 'react'

const ShortCrud = () => {
  const [alldata,setAlldata] = useState([])
  const [id, setId] = useState("")
 const [data,setData] = useState({
  name:"",
  age:"",
  salary:""
 })

 const handlechange = (e) => {
  const {name,value} = e.target
  console.log("New  saved:", data);
  setData({
    ...data,
    [name]:value
  })
 }
 const saveData = (e) => {
  e.preventDefault()
   console.log("New entry being saved:", data);
  setAlldata([
    ...alldata,data
  ])
  
 }

 const editData = (id) => {
const res = alldata.find((i,index)=> index===id)
setData(res)
setId(id)
 }
 
 const delData = (id) => {
  const res = alldata.filter((i,index)=>index != id)
  setAlldata(res)
 }

 useEffect(() => {
  console.log("alldata now:", alldata);
  console.log("data is ", data)
  
}, [alldata]);

  return (
    <div>
     <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" placeholder='entername' value={data.name} onChange={handlechange}  />
        <br /><br />
        <label htmlFor="">age</label>
        <input type="number" name="age" id="age" placeholder='enter age' value={data.age} onChange={handlechange}  />
        <br /><br />
        <label htmlFor="">salary</label>
        <input type="number" name="salary" id="salary" placeholder='enter salary' value={data.salary} onChange={handlechange}  />
        <br /><br />
        <button>save</button>
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
              alldata.map((i,index)=> {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <button onClick={()=> {editData(index)}}>Edit</button>
                      <button onClick={()=> {delData(index)}}>Delete</button>
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

export default ShortCrud
