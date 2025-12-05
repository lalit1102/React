

import axios from "axios";
import React, { useEffect, useState } from "react";


const Crud2 = () => {
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const handlechange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const savedata = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/crud")
    .then(()=>console.log("data inserted"))
  };

  const disp = (id) => {
        axios.get("http://localhost:3000/crud")
        .then((res) =>setAlldata(res.data))
  }

  const deldata = (id) => {
      axios 
      .delete("http://localhost:3000/crud"+id)
      
      .then(()=>console.log("deleted data"))
      disp()
  };
  const editdata = (id) => {
    axios.patch("http://localhost:3000/crud/"+id)
    .then((res)=>setData(res.data))
    setId(id)
  };
  useEffect(()=>{
      disp()
  },[])
  return (
    <div>
      <form action="#" method="post" onSubmit={savedata} name="fnm">
        <label htmlFor="">name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handlechange}
        />
        <br />
        <br />
        <label htmlFor="">age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handlechange}
        />
        <br />
        <br />
        <label htmlFor="">salary:</label>
        <input
          type="text"
          name="salary"
          id="salary"
          value={data.salary}
          onChange={handlechange}
        />
        <br />
        <br />
        <button>save</button>
      </form>

      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name:</th>
              <th>age</th>
              <th>salary</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((i, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>
                    <button onClick={() => editdata(index)}>edit</button>
                    <button onClick={() => deldata(index)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud2;
