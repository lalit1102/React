import axios from "axios";
import React, { useState, useEffect } from "react";

const Resigster = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    gender: "",
    email: "",
    course: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id,setId] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newdata = ({ ...data, [name]: value });
    setData(newdata)
    console.log("here new data",newdata);
    
  };

  const savedata = (e) => {
    e.preventDefault();
     console.log("Final Submitted Data:", data); 
     console.log(data.name);
     
    if (id!==""){

      axios.put("http://localhost:3000/Registers/"+id,data)
      .then(()=>console.log("updated data"))

    } else {      
      axios.post("http://localhost:3000/Registers", data)
      .then(() => {
        console.log("data inserted");
        setData({ name: "", mobile: "", gender: "", email: "", course: "" });
      
      });
    }
  };

  const disp = () => {
    axios
      .get("http://localhost:3000/Registers")
      .then((res) => setAlldata(res.data));
  };

  useEffect(() => {
    disp();
  }, []);

  const deldata = (id) => {
    axios.delete("http://localhost:3000/Registers/" + id)
    .then(() => {
      console.log("deleted data here");
      disp();
    });
  };


  const editdata = (id) => {
    axios
    .patch("http://localhost:3000/Registers/"+id)
    .then((res)=>setData(res.data))
    disp()
    setId(id)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      Welcome to Register Form
    </h1>

    <form onSubmit={savedata} className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-2xl mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile:</label>
          <input
            type="number"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-4">Gender:</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl cursor-pointer transition-all">
              <input
                type="radio" name="gender" value="male"
                checked={data.gender === "male"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600"
              />
              <span className="font-medium text-gray-800">Male</span>
            </label>
            <label className="flex items-center space-x-2 p-3 bg-pink-50 hover:bg-pink-100 rounded-xl cursor-pointer transition-all">
              <input
                type="radio" name="gender" value="female"
                checked={data.gender === "female"}
                onChange={handleChange}
                className="w-5 h-5 text-pink-600"
              />
              <span className="font-medium text-gray-800">Female</span>
            </label>
            <label className="flex items-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl cursor-pointer transition-all">
              <input
                type="radio" name="gender" value="other"
                checked={data.gender === "other"}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600"
              />
              <span className="font-medium text-gray-800">Other</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Course:</label>
          <select 
            name="course" 
            value={data.course} 
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500"
          >
            <option value="">Select Course</option>
            <option value="MERN STACK DEVELOPER">MERN Stack Developer</option>
            <option value="FULL STACK DEVELOPER">Full Stack Developer</option>
            <option value="DATA ANALYSIS">Data Analysis</option>
          </select>
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full mt-8 py-4 px-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-2xl hover:from-emerald-600 hover:to-green-700 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        {id ? "Update" : "Save"} Data
      </button>
    </form>

   
    <div className="max-w-6xl mx-auto overflow-x-auto">
      <table className="w-full bg-white rounded-2xl shadow-2xl border border-gray-200">
        <thead>
          <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <th className="p-4 text-left rounded-tl-2xl font-bold">ID</th>
            <th className="p-4 text-left font-bold">Name</th>
            <th className="p-4 text-left font-bold">Mobile</th>
            <th className="p-4 text-left font-bold">Gender</th>
            <th className="p-4 text-left font-bold">Email</th>
            <th className="p-4 text-left font-bold">Course</th>
            <th className="p-4 text-left rounded-tr-2xl font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => (
            <tr key={i.id} className="hover:bg-gray-50 border-b hover:shadow-md transition-all">
              <td className="p-4 font-mono text-sm bg-gray-50">{i.id}</td>
              <td className="p-4 font-semibold text-gray-900">{i.name || 'N/A'}</td>
              <td className="p-4 font-mono">{i.mobile || 'N/A'}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  i.gender === 'male' ? 'bg-blue-100 text-blue-800' :
                  i.gender === 'female' ? 'bg-pink-100 text-pink-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {i.gender || 'N/A'}
                </span>
              </td>
              <td className="p-4 text-sm">{i.email || 'N/A'}</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-medium">
                  {i.course || 'N/A'}
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button 
                  onClick={() => editdata(i.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all text-sm font-medium"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deldata(i.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all text-sm font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Resigster;
