import { useState } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  onFocus,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const errors = error?.replaceAll("[", " ").replaceAll("]", " ");
  return (
    <div className="mb-3 relative">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>
      <input
        className={`w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
          error ? "form-invalid" : ""
        }`}
        id={id}
        type={showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {type === "password" && (
        <div
          className="absolute right-2 top-9 cursor-pointer text-slate-200"
          onClick={handleShowPassword}
        >
          <span
            className={showPassword ? "ri--eye-line" : "ri--eye-off-line"}
          ></span>
        </div>
      )}
      {errors && (
        <ul className="text-red-500 text-sm my-2 italic ">
          {errors.split(",").map((err, index) => (
            <li className="before:content-['*']" key={index}>
              {err}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormField;
