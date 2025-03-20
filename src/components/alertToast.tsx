import { useEffect, useState } from "react";

interface AlertToastProps {
  status: "error" | "success" | "warning";
  header: string;
  message: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertToast: React.FC<AlertToastProps> = ({
  status,
  header,
  message,
  isActive,
  setIsActive,
}) => {
  setTimeout(() => {
    setIsActive(false);
  }, 3000);
  const [bgColor, setBgColor] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (status === "error") {
      setBgColor("bg-red-400");
      setIcon("flowbite--close-circle-solid");
    } else if (status === "success") {
      setBgColor("bg-green-400");
      setIcon("flowbite--check-circle-solid");
    } else if (status === "warning") {
      setBgColor("bg-yellow-500");
      setIcon("flowbite--exclamation-circle-solid");
    }
  }, [status]);

  return (
    <div
      className={`absolute top-4 right-5 ${bgColor} rounded-md text-white shadow-md transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" pl-4 pr-6 py-3 flex flex-row gap-4 items-center">
        <span className={icon}></span>
        <div>
          <p className="text-lg font-semibold">{header}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <div
        className={`w-full rounded-b-md h-1 bg-slate-200 transition-transform duration-[3000ms] origin-left ${
          isActive ? "scale-x-0" : ""
        }`}
      ></div>
    </div>
  );
};

export default AlertToast;
