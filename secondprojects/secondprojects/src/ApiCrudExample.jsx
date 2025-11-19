import axios from "axios"
import React,{useState} from "react";
const ApiCrudExample = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:""
    
    
  })

  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState('')
  const handlechange = (e) => {
    const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
  }


  const saveData = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/users",data)
     .then(()=>console.log("Inserted"))
  }

  return (
    <div>
      <h3>Api Crud Example</h3>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">
          Name:
          <input type="text" name="name" id="name" value={data.name} onChange={handlechange}/>
        </label>
        <label htmlFor="">
          Age:
          <input type="number" name="age" id="age" value={data.age} onChange={handlechange}/>
        </label>
        <label htmlFor="">
          salary:
          <input type="number" name="salary" id="salary" value={data.salary} onChange={handlechange}/>
        </label>
        <button type="submit" value="save" >save</button>

      </form>
      <br />
      <br />
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

        </tbody>
      </table>
    </div>
  );
};

export default ApiCrudExample;
