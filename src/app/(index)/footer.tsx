import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-wrap mt-8 lg:px-20 px-8 py-6 min-h-44 sm:flex-col sm:gap-4 md:flex-row">
        <div className="md:w-1/4 w-full">
          <div className="px-6">
            <Image src={"/logo.svg"} width={200} height={150} alt="Logo" />
            <p className="text-slate-300 mt-2">
              Top up game murah dan terpercaya
            </p>
            <div className="flex items-center space-x-3 mt-6 text-slate-300">
              <Link href="#">
                <span className="ic--baseline-facebook"></span>
              </Link>
              <Link href="#">
                <span className="ri--whatsapp-fill"></span>
              </Link>
              <Link href="#">
                <span className="jam--discord"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-full">
          <div className="px-6">
            <p className="font-semibold text-xl mt-4">Jasa Top-Up</p>
            <ul className="mt-2 text-slate-300 flex flex-col gap-1">
              <li>
                <Link href="#">Genshin Impact</Link>
              </li>
              <li>
                <Link href="#">Honkai: Star Rail</Link>
              </li>
              <li>
                <Link href="#">Honkai Imapct 3rd</Link>
              </li>
              <li>
                <Link href="#">Mobile Legends: Bang Bang</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 w-full">
          <div className="px-6">
            <p className="font-semibold text-xl mt-4">Navigasi Situs</p>
            <ul className="mt-2 text-slate-300 flex flex-col gap-1">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Periksa Pesanan</Link>
              </li>
              <li>
                <Link href="/login">Masuk</Link>
              </li>
              <li>
                <Link href="/register">Daftar</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-sky-500 mt-6 w-full h-11 flex items-center justify-center ">
        <p className="md:text-sm text-xs">
          ZainStore.id is a property of ZainStore. ©2024 All Rights Reserved.
        </p>
      </div>
    </>
  );
}
