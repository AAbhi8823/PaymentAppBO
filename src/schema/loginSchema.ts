import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is required"),
    // .email()
    // .matches(/@[^.]*\./),
  password: yup
    .string()
    .required("password is required")
    .max(16, "password is too long"),
});

export default loginSchema;
