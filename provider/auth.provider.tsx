import { getProfile } from "@/api/auth.api";
import { AuthContext } from "@/contexts/auth.context";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const { data, isLoading} = useQuery ({
        queryFn: getProfile,
        queryKey: ['auth-profile'],
        retry: false,
        refetchOnWindowFocus: 'always',
        refetchInterval: 5 * 60 * 1000
    })

    //


  return (
    <AuthContext.Provider
      value={{
        user: null,
        isLoading: false,
        login: () => {},
        logout: () => {},
        register: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
