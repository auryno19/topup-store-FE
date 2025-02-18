"use client";

import Link from "next/link";
import AuthCard from "../authCard";
import AuthFooterCard from "../authFooterCard";
import { useState } from "react";

export default function RegisterPage() {
  const [isError, setIsError] = useState(false);
  const [alertHeader, setAlertHeader] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlertError = () => {
    setIsError(!isError);
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
        <div className="mb-3">
          <label htmlFor="username" className="text-sm text-gray-300">
            Username
          </label>
          <input
            className="w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600"
            id="username"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            className="w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 text-2xl font-bold tracking-wider"
            id="password"
            type="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordConfirm" className="text-sm text-gray-300">
            Konfirmasi Password
          </label>
          <input
            className="w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 text-2xl font-bold tracking-wider"
            id="password"
            type="passwordConfirm"
          />
        </div>
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
