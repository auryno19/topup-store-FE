interface ButtonProps {
  loading: boolean;
  onClick: (e: React.FormEvent) => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ loading, onClick, value }) => {
  return (
    <div className="mt-6 w-full flex justify-center">
      <button
        className="px-8 py-2 bg-sky-500 rounded-md hover:opacity-75 transition-all duration-200"
        onClick={onClick}
      >
        {loading ? <span className="line-md--loading-loop"></span> : value}
      </button>
    </div>
  );
};

export default Button;
