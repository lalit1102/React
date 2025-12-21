import React, { useState } from "react";

const SignupForm2 = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    course: [],
  });
  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData({
        ...data,
        course: checked
          ? [...data.course, value]
          : data.course.filter((i) => i !== value),
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const savedata = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        className="bg-white text-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
        onSubmit={savedata}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Signup Form
        </h2>

        <div>
          <label className="block text-sm font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handlechange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            value={data.firstname}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            onChange={handlechange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            value={data.lastname}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handlechange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={data.email}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handlechange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={data.password}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Gender</label>
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handlechange}
                checked={data.gender === "male"}
              />
              Male
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handlechange}
                checked = {data.gender === "female"}
              />
              Female
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handlechange}
                checked={data.gender === "other"}
              />
              Other
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Course</label>
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="course"
                value="react"
                onChange={handlechange}
                checked={data.course.includes("react")}
              />
              React
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="course"
                value="node"
                onChange={handlechange}
                checked={data.course.includes("node")}
              />
              Node
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="course"
                value="mongodb"
                onChange={handlechange}
                checked={data.course.includes("mongodb")}
              />
              MongoDB
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SignupForm2;
