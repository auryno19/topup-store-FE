import Image from "next/image";

interface FormFileProps {
  id: string;
  label: string;
  error: string;
  value: string;
  handlePreview: () => void;
  clearPreview: () => void;
  previewImage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const FormFile: React.FC<FormFileProps> = ({
  id,
  label,
  value,
  error,
  handlePreview,
  clearPreview,
  previewImage,
  onChange,
}) => {
  return (
    <>
      <label htmlFor="banner" className="text-sm text-slate-600 ">
        {label}
      </label>
      <div
        className={`flex flex-row items-center w-full bg-slate-300 rounded-md mt-2 ${
          error && "ring-red-500 ring-2"
        }`}
      >
        <input
          type="file"
          id={id}
          onChange={(e) => {
            if (e.target.files) {
              onChange(e);
              setTimeout(() => {
                handlePreview();
              }, 200);
            }
          }}
          hidden
        />
        <label
          htmlFor="banner"
          className="block py-2 px-4 rounded-[3.5px] w-[6.5rem] border-0 text-sm =font-semibold bg-slate-400
              text-slate-700 hover:bg-slate-500 hover:text-slate-200 cursor-pointer"
        >
          Choose file
        </label>
        <label className="text-sm py-2 px-4 text-slate-500 max-w-72">
          <p className="line-clamp-1">{value}</p>
        </label>
      </div>
      {error && (
        <div className="before:content-['*'] text-sm italic text-red-600 mt-1 ml-2">
          {error}
        </div>
      )}
      <div className={`relative w-36 h-24 mt-3  ${!previewImage && "hidden"}`}>
        {previewImage && (
          <Image
            src={previewImage}
            alt="image preview"
            layout="fill"
            objectFit="cover"
          />
        )}
        <div
          className="absolute flex items-center justify-center text-slate-200 w-5 h-5 bg-red-500 rounded-full cursor-pointer -right-2 -top-2"
          onClick={clearPreview}
        >
          <span className="iconamoon--close-bold"></span>
        </div>
      </div>
    </>
  );
};

export default FormFile;
