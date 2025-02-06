"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <div className="w-full md:py-4 py-2 px-6 bg-[#393e46] flex items-center shadow-md justify-between ">
        <div className="relative w-1/4 h-12 md:h-10">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Fufa Store Logo"
            className="w-32 h-8"
          />
        </div>
        <div className="md:flex space-x-5 ml-auto items-center md:text-sm lg:text-base hidden">
          <Link
            href="#"
            className="flex items-center hover:text-sky-500 transition-all duration-200"
          >
            <span className="material-symbols--home-rounded mr-1"></span>
            <p>Home</p>
          </Link>
          <Link
            href="#"
            className="flex items-center hover:text-sky-500 transition-all duration-200"
          >
            <span className="fluent--slide-search-16-filled mr-1"></span>
            <p>Periksa Pesanan</p>
          </Link>
          <Link
            href="/login"
            className="bg-sky-500 font-bold px-4 py-1.5 rounded-lg shadow-sm flex items-center hover:opacity-80 transition-all duration-200"
          >
            <span className="material-symbols--login mr-1"></span>
            <p>Masuk</p>
          </Link>
          <Link
            href="/register"
            className="text-sky-500 font-bold bg-white px-4 py-1.5 rounded-lg shadow-sm flex items-center hover:opacity-80 transition-all duration-200"
          >
            <span className="mingcute--edit-fill mr-1"></span>
            <p>Daftar</p>
          </Link>
        </div>
        <button
          className={`h-6 w-8 md:hidden flex flex-col justify-between cursor-pointer ${
            isOpen ? "toggle-active" : ""
          }`}
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <div className="w-full h-1 bg-white rounded-full origin-top-left transition-transform duration-300 ease-in-out"></div>
          <div className="w-full h-1 bg-white rounded-full transition-transform duration-300 ease-in-out"></div>
          <div className="w-full h-1 bg-white rounded-full origin-bottom-left transition-transform duration-300 ease-out"></div>
        </button>
      </div>
      <div
        className={`absolute bg-[#393e46] h-screen z-50 w-72 top-0 shadow-md transition-transform duration-300 ease-in-out px-6 py-4 ${
          isOpen ? "translate-x-0" : "-translate-x-72"
        } `}
      >
        <div className="relative w-2/3 h-12 mb-4">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Fufa Store Logo"
            className="w-32 h-8"
          />
        </div>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="#"
              className="flex items-center hover:text-sky-500 transition-all duration-200"
            >
              <span className="material-symbols--home-rounded mr-1"></span>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center hover:text-sky-500 transition-all duration-200"
            >
              <span className="fluent--slide-search-16-filled mr-1"></span>
              <p>Periksa Pesanan</p>
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="flex items-center hover:text-sky-500 transition-all duration-200"
            >
              <span className="material-symbols--login mr-1"></span>
              <p>Masuk</p>
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="flex items-center hover:text-sky-500 transition-all duration-200"
            >
              <span className="mingcute--edit-fill mr-1"></span>
              <p>Daftar</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
