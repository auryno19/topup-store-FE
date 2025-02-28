interface ModalBodyProps {
  children?: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className="w-full h-[186px]  px-4 py-2 overflow-y-auto ">
      {children}
    </div>
  );
};

export default ModalBody;
