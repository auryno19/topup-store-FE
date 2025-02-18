import Alert from "@/components/alert";
import Image from "next/image";

interface AuthCardProps {
  children?: React.ReactNode;
  isError?: boolean;
  alertHeader?: string;
  alertMessage?: string;
  handleError?: () => void;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  isError,
  alertHeader,
  alertMessage,
  handleError = () => {},
}) => {
  return (
    <>
      {isError && (
        <Alert
          status="error"
          header={alertHeader || ""}
          message={alertMessage || ""}
          handleError={handleError}
        />
      )}
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="mb-4">
          <Image src="brand.svg" height={150} width={150} alt="brand" />
        </div>
        <div className="w-2/3 md:w-1/3 shadow-lg shadow-slate-900 rounded-md border-t-[6px] border-sky-500 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthCard;
