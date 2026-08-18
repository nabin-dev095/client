import * as yup from "yup";


//* login Schema
export const loginSchema = yup.object({
  email: yup.string().email('invalid email format').required('email is required'),
  password: yup.string().required('password is required')
})



//* login Schema
export const registerSchema = yup.object({
  email: yup.string().email('invalid email format').required('email is required'),
  password: yup.string().required('password is required'), 
  conform_password: yup.string().required('password is required').oneOf([yup.ref('password'), 'passsword must match']),
  full_name: yup.string().required('full anme is required').min(3, 'atleast 3 character required')
})