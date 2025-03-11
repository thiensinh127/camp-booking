"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, X } from "lucide-react";
interface LoginForm {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginForm({ isOpen, onClose }: LoginForm) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Here you would typically handle the login logic
    console.log("Login attempted with:", { email, password, rememberMe });

    // Simulating a successful login
    setTimeout(() => {
      console.log("Login successful");
      onClose();
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    // Implement social login logic here
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <Card
        className={`w-[400px] max-w-[90%] bg-gray-900 text-white shadow border-none transition-transform duration-500 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">Log in</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-gray-300 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full relative h-11 text-gray-700 border-gray-600"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <Facebook className="w-5 h-5 absolute left-4 text-blue-400" />
              Log in with Facebook
            </Button>

            <Button
              variant="outline"
              className="w-full relative h-11 text-gray-700 border-gray-600"
              onClick={() => handleSocialLogin("Google")}
            >
              <div className="absolute left-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              Log in with Google
            </Button>

            <div className="relative">
              <Separator />
              <div className="relative flex justify-center">
                <span className="absolute top-[-13px] bg-gray-800 px-4 text-xs text-gray-400 uppercase">
                  OR
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="h-11 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    className="h-11 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 text-sm hover:text-gray-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                className="w-full h-11 bg-green-800 hover:bg-green-700 text-white"
              >
                Log In
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
