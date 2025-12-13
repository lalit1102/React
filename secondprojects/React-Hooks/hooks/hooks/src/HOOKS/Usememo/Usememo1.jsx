import React, { useState } from 'react'

const Usememo1 = () => {
  const [id,setId] = useState("")
  const[data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }
   const [alldata,setAlldata] = useState([])
   const savedata = (e) => {
        e.preventDefault()
        setAlldata([...alldata,data])
        setId("")
          
        }
  return (
    <div>
      <form action="#" method="post" onSubmit={savedata}>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} placeholder='enter the name'  /><br />
        <label htmlFor="">age</label>
        <input type="text" name="age" id="name" value={data.age} onChange={handleChange} placeholder='enter the age'  /><br />
        <label htmlFor="">salary</label>
        <input type="text" name="salary" id="salary" value={data.salary} onChange={handleChange} placeholder='enter the salary'  /><br />
        <button>save</button>
      </form>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {
            alldata.map((i,index)=>{
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Usememo1
