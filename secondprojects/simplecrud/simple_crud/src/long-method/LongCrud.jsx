import React, { useState } from 'react'

const LongCrud = () => {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [salary,setSalary] = useState("")
  const [data,setData] = useState([])
  const [id,setId] = useState("")
  const handlesalary = (e) => {
        setSalary(e.target.value)
  }
      const saveData = (e) => {
        e.preventDefault()
        // console.log(e)
        if(id !== ""){
              const res = data.map((i,index)=>{
                if(index === id){
                    i.name = name
                    i.age = age
                    i.salary = salary
                }
                return i 
              })
              setData(res)
        } else {
          
        
        setData([
          ...data,
          {name,age,salary}
        ])
          setName('')
          setAge('')
          setSalary('')
      }
      }

      const deldata = (id) => {
           const res = data.filter((i,index)=>{
              return index != id
            })
            setData(res)
      }

      const editData = (id) => {
        const res = data.find((i,index)=>{
          return index === id
        })
        setName(res.name)
        setAge(res.age)
        setSalary(res.salary)
        setId(id)
      }
  return (
    <div>
     <h1>Long method crud example</h1>
      <div>
        <form action="#" name='frm' method='post' onSubmit={saveData}>
          <label htmlFor="">name:</label>
          <input type="text" name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <br /><br />
           <label htmlFor="">Age:</label>
          <input type="number" name='age' id='age' value={age} onChange={(e)=>setAge(e.target.value)} />
           <br /><br /> 
            <label htmlFor="">salary: </label>
            <input type="number" name="salary" id="salary" value={salary} onChange={handlesalary} />
              <br /><br />
              <input type="submit" name="save"  />
        </form>
        <br />
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
                data.map((i,index)=>{
                    return (
                      <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td>
                          <button onClick={()=>{editData(index)}}>Edit</button>
                          <button onClick={()=>{deldata(index)}}>delete</button>
                        </td>
                      </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LongCrud
