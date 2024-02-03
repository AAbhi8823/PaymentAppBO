import * as yup from "yup";

const sideDrawerSchema = yup.object().shape({
  transactionStatus: yup.string().required("Select the tr status"),
});

export default sideDrawerSchema;