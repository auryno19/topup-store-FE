interface ButtonProps {
  loading: boolean;
  onClick: (e: React.FormEvent) => void;
  value: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
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
  iconStart = null,
  iconEnd = null,
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
      className={`${szButton} ${bgButton} shadow-md text-white rounded-md hover:opacity-75 transition-all duration-200 flex items-center`}
      onClick={onClick}
    >
      {iconStart}
      {loading ? (
        <span className="line-md--loading-loop"></span>
      ) : (
        <p>{value}</p>
      )}
      {iconEnd}
    </button>
    // </div>
  );
};

export default Button;
