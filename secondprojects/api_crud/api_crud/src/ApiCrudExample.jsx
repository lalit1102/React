import React, { useState } from 'react';

const ApiCrudExample = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: ""
  });

  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };


  // form submit થાય ત્યારે આ function ચાલે છે. જો id ખાલી ન હોય તો એડિટ મોડમાં છે, એટલે alldata માં index id પર જ data સાથે update કરે છે.નહીંતર, નવું record alldataમાં add કરે છે. submit પછી id અને data ખાલી થાય છે, એટલે form reset થાય છે.


  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== "") {
      const updatedData = alldata.map((item, index) =>
        index === id ? data : item
      );
      setAlldata(updatedData);
      setId("");
    } else {
      setAlldata([...alldata, data]);
    }
    setData({ firstname: "", lastname: "", age: "" });
  };

// જયારે user Edit પર ક્લિક કરે, editData તે record શોધીને data state માં મૂકે છે.edit modeમાં id set થાય છે, એટલે form submitમાં update થાય.
// 
  const editData = (index) => {
    const record = alldata[index];
    setData(record);
    setId(index);
  };

// record ને alldata માંથી filter કરીને કાઢી કાઢે છે.

  const deleteData = (index) => {
    const filteredData = alldata.filter((item, i) => i !== index);
    setAlldata(filteredData);
   
    if (index === id) {
      setData({ firstname: "", lastname: "", age: "" });
      setId("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Api CRUD Example</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label htmlFor="firstname" className="block mb-2 font-semibold text-gray-700">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block mb-2 font-semibold text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-2 font-semibold text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {id === "" ? "Save" : "Update"}
          </button>
          <button
            type="button"
            onClick={() => {
              setData({ firstname: "", lastname: "", age: "" });
              setId("");
            }}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Reset
          </button>
        </div>
      </form>

      <table className="min-w-full bg-white rounded-md border border-gray-300 mt-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-200 text-left">Id</th>
            <th className="px-4 py-2 border border-gray-200 text-left">First Name</th>
            <th className="px-4 py-2 border border-gray-200 text-left">Last Name</th>
            <th className="px-4 py-2 border border-gray-200 text-left">Age</th>
            <th className="px-4 py-2 border border-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {alldata.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No Data Available</td>
            </tr>
          ) : (
            alldata.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-200">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-200">{item.firstname}</td>
                <td className="px-4 py-2 border border-gray-200">{item.lastname}</td>
                <td className="px-4 py-2 border border-gray-200">{item.age}</td>
                <td className="px-4 py-2 border border-gray-200 space-x-2">
                  <button
                    type="button"
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    onClick={() => editData(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    onClick={() => deleteData(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrudExample;
