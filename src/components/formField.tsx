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
  return (
    <div className="mb-3">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>
      <input
        className={`w-full rounded-md mt-2 h-8 bg-gray-600 px-4 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
          error ? "form-invalid" : ""
        }`}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error && (
        <p className="text-red-500 text-sm my-2 italic before:content-['*']">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
