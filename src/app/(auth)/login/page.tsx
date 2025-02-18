"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthCard from "../authCard";
import AuthFooterCard from "../authFooterCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [alertHeader, setAlertHeader] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  interface loginErrors {
    email?: string;
    password?: string;
  }

  const handleLogin = async (e: React.FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      const body = { email: email, password: password };
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      });
      // console.log(response);
      if (response.ok) {
        router.push("/");
      } else {
        const errors = await response.json();
        if (response.status === 409) {
          handleError(errors.error);
        } else {
          handleAlertError();
          setAlertHeader(errors.message);
          setAlertMessage(errors.error);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAlertError = () => {
    setIsError(!isError);
  };
  const handleError = (errors: loginErrors) => {
    if (errors.email) {
      setErrorEmail(errors.email);
    }
    if (errors.password) {
      setErrorPassword(errors.password);
    }
  };

  const handleFocusEmail = () => {
    setErrorEmail("");
  };

  const handleFocusPassword = () => {
    setErrorPassword("");
  };
  return (
    <>
      <AuthCard
        isError={isError}
        alertHeader={alertHeader}
        alertMessage={alertMessage}
        handleError={handleAlertError}
      >
        <div className="px-6 py-2">
          <p className="text-xl font-semibold text-center my-4">
            Masuk ke Akun anda
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="text-sm text-gray-300">
                Email
              </label>
              <input
                className={`w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                  errorEmail ? "form-invalid" : ""
                }`}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocusEmail}
              />
              {errorEmail && (
                <p className="text-red-500 text-sm my-2 italic before:content-['*']">
                  {errorEmail}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-sm text-gray-300">
                Password
              </label>
              <input
                className={`w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 text-2xl font-bold tracking-wider ${
                  errorPassword ? "form-invalid" : ""
                }`}
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocusPassword}
              />
              {errorPassword && (
                <p className="text-red-500 text-sm my-2 italic before:content-['*']">
                  {errorPassword}
                </p>
              )}
            </div>
            <div className="flex items-center relative">
              <input
                className="mr-2"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Ingat Saya</label>
            </div>
            <div className="my-4 w-full flex justify-center">
              <button
                className="px-8 py-2 bg-sky-500 rounded-md hover:opacity-75 transition-all duration-200"
                onClick={handleLogin}
              >
                {loading ? (
                  <span className="line-md--loading-loop"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
        <AuthFooterCard>
          Belum punya akun ?
          <Link href="/register" className="text-sky-600 ml-2">
            Daftar
          </Link>
        </AuthFooterCard>
      </AuthCard>
    </>
  );
}
