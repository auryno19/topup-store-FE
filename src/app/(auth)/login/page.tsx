"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      console.log(response);
      if (response.ok) {
        router.push("/");
        // const token = response.headers.get("Authorization")?.split(" ")[1]; // Mengambil token dari header
        // if (token) {
        //   localStorage.setItem("token", token); // Menyimpan token di localStorage
        //   router.push("/"); // Redirect ke halaman utama setelah login
        // } else {
        //   console.error("Token not found in response headers");
        //   alert("Login failed. Token not found.");
        // }
      } else {
        console.error("Login failed");
        alert("Login failed. Please check your credentials.");
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

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <Image src="brand.svg" height={150} width={150} alt="brand" />
      </div>
      <div className="w-2/3 md:w-1/3 shadow-lg shadow-slate-900 rounded-md border-t-[6px] border-sky-500 overflow-hidden">
        <div className="px-6 py-2">
          <p className="text-xl font-semibold text-center my-4">
            Masuk ke Akun anda
          </p>
          <div className="mb-3">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              className="w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
        </div>
        <div className="w-full py-3 bg-gray-700 mt-4">
          <p className="text-center text-gray-300">
            Belum punya akun ?
            <Link href="/register" className="text-sky-600 ml-2">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
