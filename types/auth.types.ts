import { loginSchema, registerSchema } from "@/schema/auth.schema"
import * as yup from "yup"

export type TLogin = yup.InferType<typeof loginSchema>
export type TRgister = yup.InferType<typeof registerSchema>