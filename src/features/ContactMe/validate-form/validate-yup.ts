import * as yup from "yup";

const email = yup.string().required("Email Required").email("Invalid email address");
const name = yup.string().required("Name Required")
const message = yup.string().required("Message Required")

export const validationSchema = yup.object({email ,name, message})