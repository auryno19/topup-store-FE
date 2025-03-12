interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full rounded-lg shadow-lg py-4 px-6 bg-slate-50 shadow-slate-400">
      {children}
    </div>
  );
};

export default Card;
