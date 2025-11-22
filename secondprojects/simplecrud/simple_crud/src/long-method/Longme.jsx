import React, { useState } from 'react'

const Longme = () => {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [salary,setSalary] = useState("")
  const [data,setData] = useState([])
  const [id,setId] = useState("")

  const saveData = (e) => {
      e.preventDefault()

      if(id !== "") {
         const res = data.map((i,index)=>{
            if(index === id){
                i.name = name,
                i.age = age,
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

  const delData = (id) =>{
   const res =  data.filter((i,index)=>{
      return index != id
    })
    setData(res)
  }
  console.log(delData)


  const editData = (id) => {
    const res = data.find ((i,index)=> {
      return index === id
    })
    setName(res.name)
     console.log(setName(res.name))
    setAge(res.age)
    setSalary(res.salary)
    setId(id)
  }
  // console.log(editData)


  return (
  <div>
  <form action="#" name='name' method='post' onSubmit={saveData}>
    <label htmlFor="">name:</label>
    <input type="text" name="name" id="name" value={name} onChange={(e) =>setName(e.target.value)} 
    placeholder='enter your name' />  <br /><br />
    <label htmlFor="">Age:</label>
    <input type="number" name="age" id="age" value={age} onChange={(e) =>setAge(e.target.value)} 
    placeholder='enter your age' />  <br /><br />
    <label htmlFor="">salary</label>
    <input type="number" name="salary" id="salary" value={salary} onChange={(e) =>setSalary(e.target.value)} 
    placeholder='enter your name' />  <br /><br />
    <button type='submit'>save</button>  <br /><br />
  </form>
  <div>
    <table border={2}>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>age</td>
          <td>salary</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((i,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={()=>{editData(index)}}>Edit</button>
                  <button onClick={()=>{delData(index)}}>Delete</button>
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

export default Longme
