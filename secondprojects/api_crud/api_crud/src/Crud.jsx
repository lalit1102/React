import React, { useState } from 'react';

const Crud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: ""
  });
  const [id, setId] = useState("");
  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id !== "") {
      const updatedData = allData.map((item, index) =>
        index === id ? data : item
      );
      setAllData(updatedData);
      setId("");
    } else {
      setAllData([...allData, data]);
    }

    setData({
      name: "",
      age: "",
      salary: ""
    });
  };

  const editData = (index) => {
    const record = allData[index];
    setData(record);
    setId(index);
  };

  const deleteData = (index) => {
    const filteredData = allData.filter((item, i) => i !== index);
    setAllData(filteredData);

    if (index === id) {
      setData({ name: "", age: "", salary: "" });
      setId("");
    }
  };

  return (
    <div>
      <h3>Crud App</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={data.age}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            value={data.salary}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">{id === "" ? "Save" : "Update"}</button>
        <button 
          type="button" 
          onClick={() => {
            setData({ name: "", age: "", salary: "" });
            setId("");
          }}
          style={{ marginLeft: '10px' }}
        >
          Reset
        </button>
      </form>

      <br />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            allData.length === 0 ? (
              <tr>
                <td colSpan="5" style={{textAlign: "center"}}>No data available</td>
              </tr>
            ) : (
              allData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button onClick={() => editData(index)}>Edit</button>
                    <button onClick={() => deleteData(index)} style={{ marginLeft: '10px' }}>Delete</button>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
