/* eslint-disable @typescript-eslint/no-explicit-any */

import api from ".";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};