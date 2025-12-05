import React, { useState } from "react";


const Crud1 = () => {
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

    if (id !== "") {
      const res = alldata.map((i, index) => (id === index ? data : i));
      setAlldata(res);
    } else {
      setAlldata([...alldata, data]);
    }
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("")
  };

  const deldata = (id) => {
    const res = alldata.filter((i, index) => index !== id);
    setAlldata(res);
  };
  const editdata = (id) => {
    const res = alldata.find((i, index) => index === id);
    setData(res);
    setId(id);
  };
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

export default Crud1;
