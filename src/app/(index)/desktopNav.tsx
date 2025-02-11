import Link from "next/link";
import Image from "next/image";

interface DesktopNavProps {
  children?: React.ReactNode;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ children }) => {
  return (
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
          href="/"
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

      {children}
    </div>
  );
};

export default DesktopNav;
