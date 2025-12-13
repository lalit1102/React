import axios from "axios";
import React, { useEffect, useState } from "react";

const Crud2 = () => {
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [data, setData] = useState({
    id: "",
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

    if (id !== "") {
      // UPDATE
      axios.put(`http://localhost:3000/crud/${id}`, data).then(() => {
        console.log("updated");
        disp();
        setId("");
        setData({ id: "", name: "", age: "", salary: "" });
      });
    } else {
      // INSERT
      axios.post("http://localhost:3000/crud", data).then(() => {
        console.log("data inserted");
        disp();
        setData({ id: "", name: "", age: "", salary: "" });
      });
    }
  };

  const disp = () => {
    axios.get("http://localhost:3000/crud").then((res) => setAlldata(res.data));
  };

  const deldata = (id) => {
    axios.delete(`http://localhost:3000/crud/${id}`).then(() => {
      console.log("deleted");
      disp();
    });
  };

  const editdata = (id) => {
    axios.get(`http://localhost:3000/crud/${id}`).then((res) => {
      setData({
        id: res.data.id,
        name: res.data.name,
        age: res.data.age,
        salary: res.data.salary,
      });

      setId(id);
    });
  };

  useEffect(() => {
    disp();
  }, []);

  return (
    <div>
      <h1>Here print ID --- {data.id}</h1>
      <h2>Here print Name --- {data.name}</h2>
      <h2>Here print Age --- {data.age}</h2>
      <h2>Here print Salary --- {data.salary}</h2>

      <form onSubmit={savedata}>
        <label>ID:</label>
        <input type="text" value={data.id} readOnly disabled />

        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handlechange} />

        <label>Age:</label>
        <input type="number" name="age" value={data.age} onChange={handlechange} />

        <label>Salary:</label>
        <input type="text" name="salary" value={data.salary} onChange={handlechange} />

        <button>Save</button>
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {alldata.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.salary}</td>
              <td>
                <button onClick={() => editdata(i.id)}>Edit</button>
                <button onClick={() => deldata(i.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud2;
