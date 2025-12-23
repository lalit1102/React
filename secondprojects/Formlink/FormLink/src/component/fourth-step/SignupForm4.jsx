import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Validation from "./Validation";

const SignupForm4 = () => {
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 p-6 gap-6">
      <Formik
        enableReinitialize
        initialValues={{
          firstname: editIndex !== null ? tableData[editIndex].firstname : "",
          lastname: editIndex !== null ? tableData[editIndex].lastname : "",
          email: editIndex !== null ? tableData[editIndex].email : "",
          password: "",
          gender: editIndex !== null ? tableData[editIndex].gender : "",
          course: editIndex !== null ? tableData[editIndex].course : [],
        }}
        validationSchema={Validation}
        onSubmit={(values, { resetForm }) => {
          if (editIndex !== null) {
     
            const updatedData = [...tableData];
            updatedData[editIndex] = values;
            setTableData(updatedData);
            setEditIndex(null);
          } else {
         
            setTableData([...tableData, values]);
          }
          resetForm();
        }}
      >
        {() => (
          <Form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-center">
              {editIndex !== null ? "Edit Data" : "Signup Form"}
            </h2>

            <div>
              <label>First Name</label>
              <Field name="firstname" className="w-full border p-2 rounded" />
              <ErrorMessage name="firstname" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label>Last Name</label>
              <Field name="lastname" className="w-full border p-2 rounded" />
              <ErrorMessage name="lastname" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label>Email</label>
              <Field type="email" name="email" className="w-full border p-2 rounded" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label>Password</label>
              <Field type="password" name="password" className="w-full border p-2 rounded" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label>Gender</label>
              <div className="flex gap-4">
                <label><Field type="radio" name="gender" value="male" /> Male</label>
                <label><Field type="radio" name="gender" value="female" /> Female</label>
                <label><Field type="radio" name="gender" value="other" /> Other</label>
              </div>
              <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label>Course</label>
              <div className="flex flex-col">
                <label><Field type="checkbox" name="course" value="react" /> React</label>
                <label><Field type="checkbox" name="course" value="node" /> Node</label>
                <label><Field type="checkbox" name="course" value="mongodb" /> MongoDB</label>
              </div>
              <ErrorMessage name="course" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              {editIndex !== null ? "Update" : "Save"}
            </button>
          </Form>
        )}
      </Formik>

      
      {tableData.length > 0 && (
        <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">User Data</h3>

          <table className="w-full border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">First</th>
                <th className="border p-2">Last</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{item.firstname}</td>
                  <td className="border p-2">{item.lastname}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.gender}</td>
                  <td className="border p-2">{item.course.join(", ")}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => setEditIndex(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setTableData(tableData.filter((_, i) => i !== index))
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SignupForm4;
