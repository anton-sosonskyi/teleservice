import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup.string().trim().required("Field can't be empty").email("Invalid email").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),
  password: yup.string().trim().required("Field can't be empty").min(8, "Password should be 8 characters long")
});