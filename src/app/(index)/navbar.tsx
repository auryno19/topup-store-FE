"use client";

import { useEffect, useState } from "react";
import MobileNav from "./mobileNav";
import Toggle from "./toggle";
import DesktopNav from "./desktopNav";
import { useAuth } from "../context/authContext";

interface NavbarProps {
  user: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setUser } = useAuth();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (user) {
      setUser(user);
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
  }, [isOpen, user, setUser]);

  return (
    <>
      <DesktopNav>
        <Toggle isOpen={isOpen} onToggle={handleToggle} />
      </DesktopNav>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
