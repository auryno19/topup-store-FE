import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
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
          <div className="flex items-center relative">
            <input
              className="mr-2"
              type="checkbox"
              name="remember"
              id="remember"
            />
            <label htmlFor="remember">Ingat Saya</label>
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
