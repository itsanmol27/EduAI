"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { useState } from "react";
import axios from "axios";
import { signInRoute } from "@/lib/routeProvider";

export default function SignInPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    try {
      const response = await axios.post(`${signInRoute}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="container flex h-screen items-center justify-center py-20">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign in to EduAI</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={changeHandler}
                  placeholder="name@example.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={changeHandler}
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={submitHandler}
              >
                Sign In
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    fill="#4285F4"
                    d="M24 22v4h10a8 8 0 01-3.39 5.79l5.26 4.07A15.94 15.94 0 0040 24c0-.67-.07-1.33-.17-2H24z"
                  />
                  <path
                    fill="#34A853"
                    d="M13.5 28.73a8 8 0 01-3.5-4.73L4.74 28A15.94 15.94 0 0024 40c4.22 0 7.74-1.41 10.87-3.79l-5.26-4.07A10 10 0 0113.5 28.73z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.41 19.27A15.94 15.94 0 004 24c0 1.67.24 3.28.74 4.73l5.26-4.07a10 10 0 010-5.32l-5.26-4.07z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 8a15.94 15.94 0 00-13.5 7.27l5.26 4.07A10 10 0 0124 14c2.48 0 4.73.87 6.5 2.29l5.26-4.07A15.94 15.94 0 0024 8z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                GitHub
              </Button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-orange-500 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
