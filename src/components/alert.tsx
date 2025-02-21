"use client";
import { useEffect, useState } from "react";

interface AlertProps {
  status: string;
  header: string;
  message: string;
  handleAlert: () => void;
}

const Alert: React.FC<AlertProps> = ({
  status,
  header,
  message,
  handleAlert,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [border, setBorder] = useState("");
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (status) {
      setIsActive(true);
    }
    if (status === "error") {
      setBorder("border-red-500");
      setBackground("bg-red-500");
      setIcon("line-md--close-circle");
    } else if (status === "success") {
      setBorder("border-green-500");
      setBackground("bg-green-500");
      setIcon("ix--success");
    } else if (status === "warning") {
      setBorder("border-yellow-600");
      setBackground("bg-yellow-600");
      setIcon("cuida--warning-outline");
    }
  }, [status]);
  return (
    <div
      className={`w-80 min-h-10 bg-slate-200 rounded-md px-6 py-4 shadow-md absolute z-50 -top-[220px] ${
        isActive && "translate-y-[150%]"
      } transition-transform duration-500 right-1/2 translate-x-1/2 text-center border-t-[6px] ${border}`}
    >
      <span className={icon}></span>
      <p className="text-slate-800 text-xl font-semibold">{header}</p>
      <p className="text-slate-600 mt-2">{message}</p>
      <button
        className={`${background} px-4 py-1.5 rounded-md shadow-md mt-4 mb-2`}
        onClick={() => {
          setIsActive(false);
          setTimeout(() => {
            handleAlert();
          }, 300);
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
