import axios from "axios";
import { useEffect, useState } from "react";

const ApiCrudExample = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [allData, setAllData] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      axios
        .put("http://localhost:3000/users/" + id, data)
        .then(() => console.log("Data updated Sucssesfully"));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("data inserted"));
    }

    setData({
      name: "",
      age: "",
      salary: "",
    });
  };

  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };

  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("Daata Deleted"));
    disp();
  };

  const editData = (id) => {
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
    setId(id);
  };
  // useEffect(() => {
  //   disp();
  // }, []);
  disp();
  return (
    <div>
      <h3>Api Crud Example</h3>

      <form action="#" method="post" name="frm" onSubmit={saveData}>
        Name :
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        Age :
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        Salary :
        <input
          type="number"
          name="salary"
          id="salary"
          value={data.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" value="save">
          Save
        </button>
      </form>

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {allData.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editData(i.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => delData(i.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrudExample;