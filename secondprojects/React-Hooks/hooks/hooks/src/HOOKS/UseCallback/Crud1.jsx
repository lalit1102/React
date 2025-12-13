import React, { useEffect, useState } from 'react'

const Crud1 = () => {
  
  const [data,setData] = useState({
    name:""
  })
   const handleChange = (e) => {
      const {name,value} = e.target
      setData({
        ...data,
        [name]:value
      })
   }
     const [alldata,setAlldata] = useState([])
      const [id,setId] = useState(null)
    function saveData(e) {
      e.preventDefault()
       
       if(id!==null){
        const res = alldata.map((i,index)=>(id== index)?data:i)
        setAlldata(res)
        setId(null)
       } else {

         setAlldata([...alldata,data])
       }
       setData({
        name:""
       })
       
    }
    function deldata(id) {
      const res = alldata.filter((i,index)=>id !== index)
      setAlldata(res)
    }
    function editdata(id) {
      const res = alldata.find((i,index)=> id === index)
      setData(res)
      setId(id)
    }
useEffect(() => {
  setTimeout(() => {
    console.log("here show in data", data)
  }, 1000)

  setTimeout(() => {
    console.log("here show the alldata", alldata)
  }, 2000)
}, [data, alldata])

  return (
    <div>
      <h1>here value is---{data.name}</h1>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" value={data.name} placeholder='enter the name'  onChange={handleChange}/>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" value={data.name} placeholder='enter the name'  onChange={handleChange}/>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" value={data.name} placeholder='enter the name'  onChange={handleChange}/>
        <button>SAVE</button>
      </form>
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i,index)=>{
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>
                      <button onClick={()=>editdata(index)}>edit</button>
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

export default Crud1
