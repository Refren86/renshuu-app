import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { SpringDialog } from "./SpringDialog";
import { verifyGoogleCredentials } from "@/lib/requestService";
import { LoginFormData, RegisterFormData, loginSchema, registerSchema } from "@/schemas/validation";

type AuthDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { onLogin, onRegister } = useAuth();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setError("");
    try {
      await onLogin(data.email, data.password);
      loginForm.reset();
      onClose();
    } catch (err) {
      console.log("Error:", err);
      setError("Invalid email or password");
    }
  };

  const onRegisterSubmit = async (data: RegisterFormData) => {
    setError("");
    try {
      await onRegister(data.email, data.username, data.password);
      registerForm.reset();
      onClose();
    } catch (err) {
      console.log("Error:", err);
      setError("Registration failed. Please try again.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const data = await verifyGoogleCredentials(credentialResponse.credential!);

      localStorage.setItem("auth_token", data.token);
      queryClient.setQueryData(["user"], data.user);
      onClose();
    } catch (error) {
      console.log("Google login error:", error);
      setError("Google login failed");
    }
  };

  const handleGoogleError = () => {
    setError("Google login was cancelled or failed");
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    setError("");
    loginForm.reset();
    registerForm.reset();
  };

  return (
    <SpringDialog isOpen={isOpen} onClose={onClose}>
      <div className="mt-8 p-6 rounded-lg bg-muted min-w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLoginMode ? "Login" : "Sign Up"}</h2>

        {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

        {isLoginMode ? (
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              error={loginForm.formState.errors.email?.message}
              {...loginForm.register("email")}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error={loginForm.formState.errors.password?.message}
              {...loginForm.register("password")}
            />

            <Button isLoading={loginForm.formState.isSubmitting} type="submit" className="w-full">
              Login
            </Button>

            <div className="text-center text-sm">
              <button type="button" onClick={switchMode} className="text-white hover:text-primary underline">
                Sign Up
              </button>{" "}
              if you don't have an account
            </div>
          </form>
        ) : (
          <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              error={registerForm.formState.errors.email?.message}
              {...registerForm.register("email")}
            />

            <Input
              label="Username"
              type="text"
              placeholder="Choose a username"
              error={registerForm.formState.errors.username?.message}
              {...registerForm.register("username")}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create password"
              error={registerForm.formState.errors.password?.message}
              {...registerForm.register("password")}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              error={registerForm.formState.errors.confirmPassword?.message}
              {...registerForm.register("confirmPassword")}
            />

            <Button isLoading={registerForm.formState.isSubmitting} type="submit" className="w-full">
              Sign Up
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <button type="button" onClick={switchMode} className="text-white hover:text-primary underline">
                Login
              </button>
            </div>
          </form>
        )}

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-muted text-white text-lg">Or</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              theme="outline"
              size="large"
              width="100%"
            />
          </div>
        </div>
      </div>
    </SpringDialog>
  );
};
