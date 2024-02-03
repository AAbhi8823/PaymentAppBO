import * as yup from "yup";

const manageUpiSchema = yup.object().shape({
  upi: yup
    .string()
    .required()
    .matches(/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/, "Please Enter valid upi"),
  minDepositLimit: yup
    .number()
    .required("min deposit is required")
    .typeError("min deposit must be number")
    .positive("min deposit 1 Rs required")
    .integer("min deposit must be integer")
    .max(100000, "maximum 10000 Rs allowed"),
  maxDepositLimit: yup
    .number()
    .required("max deposit is required")
    .typeError("max deposit must be number")
    .positive("max deposit 1 Rs required")
    .integer("max deposit must be integer")
    .max(100000, "maximum 10000 Rs allowed"),
});

export default manageUpiSchema;
