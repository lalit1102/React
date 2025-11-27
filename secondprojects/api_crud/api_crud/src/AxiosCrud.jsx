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

      if(id !== "") {

      } else 

      setAllData([   // always giving array bcz alldata array of object che
        ...allData,
        data
      ])
      // console.log(setAllData)
  }
  // console.log(saveData)

  const deldata = (id) => {
  const res = allData.filter((item) => item.id !== id);
  setAllData(res);
};
const editdata = (id) => {
  const res = allData.find((item)=> item.id == id)
  setData(res)
  setId(id)
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
   <table style={{ border: "2px solid black", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th style={{ border: "2px solid black" }}>id</th>
      <th style={{ border: "2px solid black" }}>name</th>
      <th style={{ border: "2px solid black" }}>age</th>
      <th style={{ border: "2px solid black" }}>salary</th>
      <th style={{ border: "2px solid black" }}>Action</th>
    </tr>
  </thead>
  <tbody>
    {allData.map((item, index) => (
      <tr key={index}>
        <td style={{ border: "2px solid black" }}>{index + 1}</td>
        <td style={{ border: "2px solid black" }}>{item.name}</td>
        <td style={{ border: "2px solid black" }}>{item.age}</td>
        <td style={{ border: "2px solid black" }}>{item.salary}</td>
        <td style={{ border: "2px solid black" }}>
          <button style={{ border: "2px solid black", margin:"10px" }} onClick={() => editdata(item.id)}>Edit</button>
          <button style={{ border: "2px solid black" }} onClick={() => deldata(item.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

   </>      
  )
}

export default AxiosCrud
