import React, { useEffect, useState } from "react";
import axios from "axios";

const AxoisCCrud = () => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data, setData] = useState({
    name: "",
    study: "",
    salary: "",
  });
  const handlechange = (e) => {
    const { name,value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const disp = () => {
    axios
    .get("http://localhost:3000/user")
    .then((res)=>setAlldata(res.data))
    .then(console.log("data display ....."))
  }
  useEffect(()=>{
    disp()
  },[])
  const savedata = (e) => {
    e.preventDefault()
    if(id!==""){
      axios.put("http://localhost:3000/user/"+id,data)
      .then(console.log("updated data"))
    } else {
      axios.post("http://localhost:3000/user",data)
      .then(console.log("inserted data..."))
    }
    setData({
      name:"",
      study:"",
      salary:""
    })
  } 

  const deldata= (id) =>{
    axios
    .delete("http://localhost:3000/user/"+id)
    .then(console.log("deleted data"))
    disp()
  }

  const editdata = (id) => {
    axios
    .patch("http://localhost:3000/user/"+id)
    .then((res)=>setData(res.data))
    setId(id)
  }

  return (
    <>
      <div>
        <h1>hello Welcome to Axios Crud</h1>
      </div>
      <div>
        <form action="#" method="post" name="fnm" onSubmit={savedata}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the name"
            value={data.name}
            onChange={handlechange}
          /><br></br><br></br>
          <label htmlFor="">study</label>
          <input
            type="text"
            name="study"
            id="study"
            placeholder="Enter the Study"
            value={data.study}
            onChange={handlechange}
          /><br></br><br></br>
          <label htmlFor="">salary</label>
          <input
            type="number"
            name="salary"
            id="salary"
            placeholder="Enter the Salary"
            value={data.salary}
            onChange={handlechange}
          /><br></br><br></br>
          <button type="submit" >{id !== "" ? "update" : "save"}</button><br></br>
        </form><br></br>
        <div>
          <table border={2}>
            <thead>
              <tr>
                <th>id</th>
                <th>Name:</th>
                <th>Study</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                alldata.map((item,index)=>{
                    return(
                      <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.study}</td>
                        <td>{item.salary}</td>
                        <td>
                          <button onClick={()=>editdata(item.id)}>Edit</button>
                          <button onClick={()=>deldata(item.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AxoisCCrud;
