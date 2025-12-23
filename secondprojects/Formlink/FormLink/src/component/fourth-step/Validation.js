import * as Yup from "yup";

const Validation = Yup.object({
  firstname: Yup.string()
    .min(3, "minimum 3 character required")
    .required("First name is required"),

  lastname: Yup.string()
    .min(3, "minimum 3 character required")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  gender: Yup.string()
  .required("Gender is required"),

   course: Yup.array()
    .min(1, "Select at least one course"),

});
  
export default Validation