import React, { useState } from "react";

const Crud3 = () => {
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [data, setData] = useState({
    name: "",
    study: "",
    course: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  const saveData = (e) => {
    e.preventDefault();

    if (id !== "") {
      const res = alldata.map((i, index) => (index == id) ? data : i);
      setAlldata(res);
    } else {
      setAlldata([...alldata, data]);
    }
    setId("");
    setData({
      name: "",
      study: "",
      course: "",
    });
  };

  const editdata = (id) => {
    const res = alldata.find((i, index) => index === id);
    setData(res);
    setId(id);
  };

  const deldata = (id) => {
    const res = alldata.filter((i, index) => index !== id);
    setAlldata(res);
  };

  return (
    <div>
      <form action="#" name="frm" method="post" onSubmit={saveData}>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handlechange}
        />
        <label htmlFor="">study</label>
        <input
          type="text"
          name="study"
          id="study"
          value={data.study}
          onChange={handlechange}
        />
        <label htmlFor="">course</label>
        <input
          type="text"
          name="course"
          id="course"
          value={data.course}
          onChange={handlechange}
        />
        <button>{id === "" ? "Save" : "Update"}</button>
      </form>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>study</th>
            <th>course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.study}</td>
                <td>{i.course}</td>
                <td>
                  <button onClick={() => editdata(index)}>editdata</button>
                  <button onClick={() => deldata(index)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Crud3;
