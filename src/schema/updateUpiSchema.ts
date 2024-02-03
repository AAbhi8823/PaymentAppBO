import * as yup from "yup";

const updateUpiSchema = yup.object().shape({
  newUpi: yup
    .string()
    .required("New Upi is required")
    .matches(/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/, "Please Enter valid upi"),
  isActive: yup.boolean().nullable(),
});

export default updateUpiSchema;
