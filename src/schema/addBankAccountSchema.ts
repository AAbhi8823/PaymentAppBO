import * as yup from "yup";

const addBankAccountSchema = yup.object().shape({
  accountNumber: yup
    .number()
    .required("account number is required")
    .typeError("account number must be number")
    .positive("must be positive")
    .integer("must be an integer")
    .test(
      "less than 10 digits",
      "ten digits required",
      (value) => value.toString().length > 10
    )
    .test(
      "more than 18 digit",
      "account number is too large",
      (value) => value.toString().length < 18
    ),
  ifscCode: yup
    .string()
    .required("ifsc code is required")
    .matches(/^[A-Za-z]{4}\d{7}$/, "enter a valid ifsc code"),
  branchName: yup.string().required("branch name is required"),
  bankName: yup.string().required("Bank name is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .test(
      "10 digits",
      "enter ten digits mobile number",
      (value) => value.length === 10
    )
    .matches(/^[6-9][0-9]{9}$/, "Enter a valid mobile number"),
  totalAmount: yup
    .number()
    .typeError("Amount must be number")
    .required("Amount is required"),
  customerId:yup.string().required("Customer id is required"),
  password:yup.string().required("Password is required"),
  minDepositLimit: yup
    .number()
    .required("min deposit limit is required")
    .typeError("must be a number")
    .positive("min deposit 1 Rs required")
    .integer("must be an integer"),
  maxDepositLimit: yup
    .number()
    .required("max deposit limit is required")
    .typeError("must be a number")
    .positive("min deposit 1 Rs required")
    .integer("must be an integer"),
});

export default addBankAccountSchema;
