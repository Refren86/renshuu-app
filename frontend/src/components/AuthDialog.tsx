import { useState } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { SpringDialog } from "./SpringDialog";
import { verifyGoogleCredentials } from "@/lib/requestService";

type AuthDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { onLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await onLogin(email, password);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      console.log({ credentialResponse });

      const data = await verifyGoogleCredentials(credentialResponse.credential!);

      localStorage.setItem("auth_token", data.token);
      window.location.reload(); // do not reload, update auth state instead
    } catch (error) {
      console.log("Google login error:", error);
      setError("Google login failed");
    }
  };

  const handleGoogleError = () => {
    setError("Google login was cancelled or failed");
  };

  return (
    <SpringDialog isOpen={isOpen} onClose={onClose}>
      <div className="mt-8 p-6 rounded-lg bg-muted min-w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-end">
            <button className="text-white underline">Sign Up</button>
          </div>

          <Button isLoading={loading} type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-6">
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
