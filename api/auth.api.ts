import { TLogin } from "@/types/auth.types";
import axios from "axios";
import api from ".";

//* login mutation function
export const Login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* get profile
export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* logout mutation function
export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
