interface ToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      className={`h-6 w-8 md:hidden flex flex-col justify-between cursor-pointer ${
        isOpen ? "toggle-active" : ""
      }`}
      onClick={onToggle}
      aria-label="Toggle menu"
    >
      <div className="w-full h-1 bg-white rounded-full origin-top-left transition-transform duration-300 ease-in-out"></div>
      <div className="w-full h-1 bg-white rounded-full transition-transform duration-300 ease-in-out"></div>
      <div className="w-full h-1 bg-white rounded-full origin-bottom-left transition-transform duration-300 ease-out"></div>
    </button>
  );
};

export default Toggle;
