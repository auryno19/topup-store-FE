"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AuthCard from "../authCard";
import AuthFooterCard from "../authFooterCard";
import FormField from "@/components/formField";
import Button from "@/components/button";
import apiService from "@/service/apiService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [statusAlert, setStatusAlert] = useState("");
  const [alertHeader, setAlertHeader] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  interface loginErrors {
    email?: string;
    password?: string;
  }
  const searchParams = useSearchParams();

  const handleLogin = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const body = { email: email, password: password };
    try {
      const response = await apiService.post("/auth/login", body, {
        credentials: "include",
      });
      const statusCode = response.status;
      // console.log(response);
      if (statusCode === 200) {
        router.push("/");
      }
    } catch (err) {
      const { status, message, error } = err as {
        status: number;
        message: string;
        error?: string;
      };
      if (status === 409) {
        handleError(error as loginErrors);
      } else {
        handleAlert();
        setStatusAlert("error");
        setAlertHeader(message);
        setAlertMessage(error as string);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAlert = () => {
    setIsError(!isError);
  };

  useEffect(() => {
    const message = searchParams.get("message");
    console.log("message:", message);
    const clearSearchParams = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { message, ...params } = Object.fromEntries(searchParams.entries());
      const newUrl =
        window.location.pathname + "?" + new URLSearchParams(params).toString();
      router.replace(newUrl); // Menghapus query parameter dari URL
    };
    if (message) {
      setStatusAlert("success");
      setAlertHeader("Success");
      setAlertMessage(message as string);
      setIsError(true);
      clearSearchParams();
    }
  }, [searchParams, router, isError]);
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
        status={statusAlert}
        isError={isError}
        alertHeader={alertHeader}
        alertMessage={alertMessage}
        handleAlert={handleAlert}
      >
        <div className="px-6 py-2">
          <p className="text-xl font-semibold text-center my-4">
            Masuk ke Akun anda
          </p>
          <form onSubmit={handleLogin}>
            <FormField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocusEmail}
              error={errorEmail}
              mode="dark"
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocusPassword}
              error={errorPassword}
              mode="dark"
            />

            <div className="flex items-center relative">
              <input
                className="mr-2"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Ingat Saya</label>
            </div>
            <Button loading={loading} onClick={handleLogin} value="Login" />
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
