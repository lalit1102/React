import React, { useState } from 'react'

const Crud2 = () => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data,setData] = useState({
    name:""
  })
   const handlechange = (e) => {
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
   }
     const savedata = (e) => {
      e.preventDefault()
      setAlldata([...alldata,data])
     }

     const deldata = (id) => {
      const res  = alldata.filter((i,index)=>id !== index)
      setAlldata(res)
     }

     const editdata = (id) => {
     const res = alldata.find((i,index)=>id === index)
      setData(res)
      setId("")
     }
  return (
    <div>
      <form action="#" method='post' onSubmit={savedata}>
        <label htmlFor="">name</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handlechange} />
        <button>save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
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
  )
}

export default Crud2
