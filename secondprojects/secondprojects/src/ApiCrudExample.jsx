import axios from "axios";
import React, { useState, useEffect } from "react";

const ApiCrudExample = () => {
  const [data, setData] = useState({ name: "", age: "", salary: "" });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();

    if (id !== "") {
      axios
        .put(`http://localhost:3000/users/${id}`, data)
        .then(() => {
          console.log("updated");
          setId("");
          setData({ name: "", age: "", salary: "" });
          disp();
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => {
          console.log("Inserted");
          setData({ name: "", age: "", salary: "" });
          disp();
        })
        .catch((err) => console.error(err));
    }
  };

  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAlldata(res.data))
      .catch((err) => console.error(err));
  };

  const editData = (itemId) => {
    axios
      .get(`http://localhost:3000/users/${itemId}`)
      .then((res) => {
        setData(res.data);
        setId(itemId);
      })
      .catch((err) => console.error(err));
  };

  const delData = (itemId) => {
    axios
      .delete(`http://localhost:3000/users/${itemId}`)
      .then(() => {
        console.log("deleted");
        disp();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    disp();
  }, []);

  return (
    <div>
      <h3>Api Crud Example</h3>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">
          Name:
          <input type="text" name="name" id="name" value={data.name} onChange={handlechange} />
        </label>
        <label htmlFor="">
          Age:
          <input type="number" name="age" id="age" value={data.age} onChange={handlechange} />
        </label>
        <label htmlFor="">
          salary:
          <input type="number" name="salary" id="salary" value={data.salary} onChange={handlechange} />
        </label>
        <button type="submit" value="save">save</button>
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
                  {alldata.map((item,i) => (
                    <tr key={item.id || i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.salary}</td>
                      <td>
                        <button onClick={()=>editData(item.id)}>edit</button>
                        <button onClick={()=>delData(item.id)}>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        };

        export default ApiCrudExample;
