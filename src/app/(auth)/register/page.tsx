"use client";

import Link from "next/link";
import AuthCard from "../authCard";
import AuthFooterCard from "../authFooterCard";
import { useState } from "react";
import FormField from "@/components/formField";
import apiService from "@/service/apiService";
import { useRouter } from "next/navigation";
import Button from "@/components/button";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [alertHeader, setAlertHeader] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  interface registerErrors {
    email?: string;
    username?: string;
    password?: string;
  }

  const handleRegister = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const body = { email: email, username: username, password: password };
    try {
      const response = await apiService.post("/auth/register", body);
      const statusCode = response.status;
      // console.log(response);
      if (statusCode === 200) {
        router.push("/login");
      }
    } catch (err) {
      const { status, message, error } = err as {
        status: number;
        message: string;
        error?: string;
      };
      if (status === 409) {
        handleError(error as registerErrors);
      } else {
        handleAlertError();
        setAlertHeader(message);
        setAlertMessage(error as string);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAlertError = () => {
    setIsError(!isError);
  };
  const handleError = (errors: registerErrors) => {
    if (errors.email) {
      setErrorEmail(errors.email);
    }
    if (errors.username) {
      setErrorUsername(errors.username);
    }
    if (errors.password) {
      setErrorPassword(errors.password);
    }
  };
  const handleFocusEmail = () => {
    setErrorEmail("");
  };
  const handleFocusUsername = () => {
    setErrorUsername("");
  };

  const handleFocusPassword = () => {
    setErrorPassword("");
  };
  return (
    <AuthCard
      isError={isError}
      alertHeader={alertHeader}
      alertMessage={alertMessage}
      handleError={handleAlertError}
    >
      <div className="px-6 py-2">
        <p className="text-xl font-semibold text-center my-4">Daftar Akun</p>
        <form onSubmit={handleRegister}>
          <FormField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocusEmail}
            error={errorEmail}
          />
          <FormField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocusUsername}
            error={errorUsername}
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocusPassword}
            error={errorPassword}
          />
          <Button loading={loading} onClick={handleRegister} value="Daftar" />
        </form>
      </div>
      <AuthFooterCard>
        Sudah punya akun ?
        <Link href="/login" className="text-sky-600 ml-2">
          Masuk
        </Link>
      </AuthFooterCard>
    </AuthCard>
  );
}
