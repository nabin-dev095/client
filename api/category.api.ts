/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const getAllCategory = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/categories");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
