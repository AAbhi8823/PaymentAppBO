import * as yup from "yup";

let createAccountSchema = yup.object().shape({
  email: yup.string().required("username is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .test(
      "10 digits",
      "enter ten digits mobile number",
      (value) => value.length === 10
    )
    .matches(/^[6-9][0-9]{9}$/, "Enter a valid mobile number"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password is too short")
    .max(16, "password is too long"),

  confirmPassword: yup
    .mixed()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "passwords must match"),

  accountType: yup.string().required("Account Type is required"),
  dashboard: yup.bool(),
  withdrawal: yup.bool(),
  register: yup.bool(),
  report: yup.bool(),
  manageDepositAccount: yup.bool(),
  manageBankAccount: yup.bool(),
  deposit: yup.bool(),
});

createAccountSchema = createAccountSchema.test(
  "page access allowed",
  "",
  (obj) => {
    if (
      obj.dashboard ||
      obj.register ||
      obj.withdrawal ||
      obj.report ||
      obj.manageBankAccount ||
      obj.manageDepositAccount ||
      obj.deposit
    ) {
      return true;
    }
    return new yup.ValidationError(
      "must select any page",
      null,
      "pageAccessAllowed"
    );
  }
);

export default createAccountSchema;
