import * as yup from "yup";

export const validationSchema = yup.object({
  subject: yup.string().trim().required("Field can't be empty"),
  ticketType: yup.string().trim().required("Field can't be empty"),
  device: yup.string().trim().required("Field can't be empty"),
  contract: yup.string().trim().required("Field can't be empty"),
  description: yup.string().trim().required("Field can't be empty"),
});
