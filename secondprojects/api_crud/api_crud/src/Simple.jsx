import React,{useState} from 'react'

const Simple = () => {
  const [data, setData] = useState({ name: "", age: "", salary: "" });
  const [allData, setAllData] = useState([]);
  const [id, setId] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Save or Update data
  const saveData = (e) => {
    e.preventDefault();

    if (id !== "") {
      // UPDATE using map
      const updatedData = allData.map((item, index) =>
        index === id ? data : item
      );

      console.log("Updated Data Array:", updatedData); // ✅ Full array
      console.log("Updated Row:", updatedData[id]);    // ✅ Only updated row

      setAllData(updatedData);
      setId(""); // reset edit mode
    } else {
      // CREATE
      setAllData([...allData, data]);
      console.log("New Data Added:", data);           // ✅ Newly added row
    }

    // Clear form
    setData({ name: "", age: "", salary: "" });
  };

  // Load data into form for editing
  const editData = (item, index) => {
    setId(index);
    setData(item);
  };

  // Delete data
  const deleteData = (index) => {
    const filtered = allData.filter((_, i) => i !== index);
    setAllData(filtered);
    console.log("After Deletion:", filtered);        // ✅ Remaining array
  };

  return (
    <>

      <h2>CRUD Example with map() & console.log</h2>
      <form onSubmit={saveData} >
        <input
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Enter Age"
          value={data.age}
          onChange={handleChange}
        />
        <input
          name="salary"
          placeholder="Enter Salary"
          value={data.salary}
          onChange={handleChange}
          
        />
        <button type="submit" style={{color:"red"}}>{id !== "" ? "Update" : "Save"}</button>
      </form>

      <table border="1" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
              <td>
                <button onClick={() => editData(item, index)}>Edit</button>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
  

export default Simple
