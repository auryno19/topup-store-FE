import Alert from "@/components/alert";
import Image from "next/image";
import Link from "next/link";

interface AuthCardProps {
  children?: React.ReactNode;
  status?: string;
  isError?: boolean;
  alertHeader?: string;
  alertMessage?: string;
  handleAlert?: () => void;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  status,
  isError,
  alertHeader,
  alertMessage,
  handleAlert = () => {},
}) => {
  return (
    <>
      {isError && (
        <Alert
          status={status || ""}
          header={alertHeader || ""}
          message={alertMessage || ""}
          handleAlert={handleAlert}
        />
      )}
      <div className="w-full min-h-[96vh] mb-5 flex flex-col items-center justify-center">
        <div className="mb-4">
          <Link href="/">
            <Image src="brand.svg" height={150} width={150} alt="brand" />
          </Link>
        </div>
        <div className="w-2/3 md:w-1/3 shadow-lg shadow-slate-900 rounded-md border-t-[6px] border-sky-500 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthCard;
