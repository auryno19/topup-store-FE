interface AuthFooterCardProps {
  children?: React.ReactNode;
}

const AuthFooterCard: React.FC<AuthFooterCardProps> = ({ children }) => {
  return (
    <div className="w-full py-3 bg-gray-700 mt-4">
      <p className="text-center text-gray-300">{children}</p>
    </div>
  );
};

export default AuthFooterCard;
