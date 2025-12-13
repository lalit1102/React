import React, { useState } from "react";
import { insFunc, updFunc, delFunc } from "./Lalit/LalitAction";
import { useDispatch, useSelector } from "react-redux";
const LalitComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const [id, setId] = useState("");
  const alldata = useSelector((i) => i.data);
  const dispatch = useDispatch();
  const savedata = (e) => {
    e.preventDefault();

    if (id !== "") {
      dispatch(updFunc(id, data));
    } else {
      dispatch(insFunc(data));
    }
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("")
  };

  const editdata = (id) => {
    alert("welcome id",id)
      const res = alldata.find((_,index)=>index === id)
      setData(res)
      setId(id)
  }

  return (
    <div>
      <h1>hello welcome to redux crud</h1>
      <form action="#" method="post" onSubmit={savedata}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handlechange}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handlechange}
        />
        <br />
        <br />
        <label htmlFor="">salary</label>
        <input
          type="number"
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
              <th>name</th>
              <th>age</th>
              <th>salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>
                    <button onClick={()=>editdata(index)}>Edit</button>
                    <button onClick={() => dispatch(delFunc(index))}>delete</button>
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

export default LalitComponent;
