import * as yup from "yup";

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("old password is required"),
  newPassword: yup
    .string()
    .required("new password is required")
    .min(6, "password is too short")
    .max(16, "password is too long"),
  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword")], "passwords must match"),
});

export default changePasswordSchema;
