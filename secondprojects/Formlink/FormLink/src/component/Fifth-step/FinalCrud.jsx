import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const FinalCrud = () => {
  const userSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const [alldata, setAllData] = useState([]);
  const [id, setId] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Formik CRUD
        </h2>

        <Formik
          enableReinitialize
          initialValues={{
            username: id !== "" ? alldata[id].username : "",
            age: id !== "" ? alldata[id].age : "",
            email: id !== "" ? alldata[id].email : "",
          }}
          validationSchema={userSchema}
          onSubmit={(values, { resetForm }) => {
            if (id !== "") {
              const newData = [...alldata];
              newData[id] = values;
              setAllData(newData);
            } else {
              setAllData([...alldata, values]);
            }
            setId("");
            resetForm();
          }}
        >
          <Form className="space-y-4">
            
            <div>
              <label className="block font-medium text-gray-600">
                Name
              </label>
              <Field
                type="text"
                name="username"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
            <div>
              <label className="block font-medium text-gray-600">
                Age
              </label>
              <Field
                type="number"
                name="age"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

           
            <div>
              <label className="block font-medium text-gray-600">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {id !== "" ? "Update" : "Submit"}
            </button>
          </Form>
        </Formik>

       
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {alldata.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-4 text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}

              {alldata.map((u, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{u.username}</td>
                  <td className="p-2 border">{u.age}</td>
                  <td className="p-2 border">{u.email}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => setId(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setAllData(alldata.filter((_, i) => i !== index))
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
    </div>
  );
};

export default FinalCrud;
