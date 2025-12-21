import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Validation from "./Validation";

const SignForm3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          gender: "",
          course: [],
        }}
        validationSchema={Validation}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form className="bg-white text-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-center">Signup Form</h2>

          
            <div>
              <label className="block text-sm font-semibold mb-1">
                First Name
              </label>
              <Field
                name="firstname"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="firstname"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold mb-1">
                Last Name
              </label>
              <Field
                name="lastname"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="lastname"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Gender
              </label>
              <div className="flex gap-4 text-sm">
                <label>
                  <Field type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" /> Other
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Course
              </label>
              <div className="flex flex-col gap-2 text-sm">
                <label>
                  <Field type="checkbox" name="course" value="react" /> React
                </label>
                <label>
                  <Field type="checkbox" name="course" value="node" /> Node
                </label>
                <label>
                  <Field type="checkbox" name="course" value="mongodb" /> MongoDB
                </label>
              </div>
              <ErrorMessage
                name="course"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Save
            </button>

            
            <div className="mt-4 text-sm text-gray-700 border-t pt-3">
              <p><b>First Name:</b> {values.firstname}</p>
              <p><b>Last Name:</b> {values.lastname}</p>
              <p><b>Email:</b> {values.email}</p>
              <p><b>Gender:</b> {values.gender}</p>
              <p><b>Course:</b> {values.course.join(", ")}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignForm3;
