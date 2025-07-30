import { ReactNode, createContext } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

import { TUser } from "@/types";
import { apiInstance } from "@/lib/axiosInstance";
import { getUser, login, register } from "@/lib/requestService";

type TAuthContext = {
  user: TUser | null;
  token: string | null;
  loading: boolean;
  isAdmin: boolean;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const token = localStorage.getItem("auth_token");

  if (token) {
    apiInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  const { data: user, isLoading: loading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: !!token,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const registerMutation = useMutation({
    mutationFn: ({ email, username, password }: { email: string; username: string; password: string }) =>
      register(email, username, password),
    onSuccess: (data) => {
      localStorage.setItem("auth_token", data.token);
      apiInstance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      queryClient.setQueryData(["user"], data.user);
    },
  });

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => login(email, password),
    onSuccess: (data) => {
      localStorage.setItem("auth_token", data.token);
      apiInstance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      queryClient.setQueryData(["user"], data.user);
    },
  });

  const handleRegister = async (email: string, username: string, password: string) => {
    try {
      await registerMutation.mutateAsync({ email, username, password });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    delete apiInstance.defaults.headers.common["Authorization"];
    queryClient.setQueryData(["user"], null);
    queryClient.removeQueries({ queryKey: ["user"] });
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAdmin,
        onLogin: handleLogin,
        onRegister: handleRegister,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
