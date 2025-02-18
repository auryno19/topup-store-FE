import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/authContext";

interface MobileNavProps {
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  const auth = useAuth();
  return (
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
        {auth.user ? (
          <li>
            <Link
              href="/login"
              className="flex items-center hover:text-sky-500 transition-all duration-200"
            >
              <span className="gg--profile mr-1"></span>
              <p>{auth.user ?? ""}</p>
            </Link>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileNav;
