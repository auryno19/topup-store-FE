interface ButtonProps {
  loading: boolean;
  onClick: (e: React.FormEvent) => void;
  value: string;
  // margin?: string | "";
  type?: "primary" | "danger" | "warning";
  size?: "md" | "sm" | "xl";
}

const Button: React.FC<ButtonProps> = ({
  loading,
  onClick,
  value,
  type,
  size,
  // margin = "",
}) => {
  let bgButton = "";
  let szButton = "";
  if (type === undefined) {
    type = "primary";
  }
  if (size === undefined) {
    size = "md";
  }
  if (type == "primary") {
    bgButton = "bg-sky-500";
  } else if (type == "danger") {
    bgButton = "bg-red-500";
  } else if (type == "warning") {
    bgButton = "bg-yellow-500";
  }
  if (size == "md") {
    szButton = "px-8 py-2";
  } else if (size == "sm") {
    szButton = "px-4 py-1 text-sm";
  } else if (size == "xl") {
    szButton = "px-10 py-3 text-xl";
  }
  return (
    // <div className={`${margin} w-full flex justify-center`}>
    <button
      className={`${szButton} ${bgButton} shadow-md rounded-md hover:opacity-75 transition-all duration-200`}
      onClick={onClick}
    >
      {loading ? <span className="line-md--loading-loop"></span> : value}
    </button>
    // </div>
  );
};

export default Button;
