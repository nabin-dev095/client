import { TLogin } from "@/types/auth.types";
import axios from "axios";
import api from ".";


//* login mutation function
export const Login = async (data: TLogin) => {
    try {
        const response = await api.post(
            "/auth/login",
            data,
        );
        return response.data;
        
    } catch (error: any) {
        throw error?.response?.data;
        
    }
}