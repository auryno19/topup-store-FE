import Profile from "./profile";

const Navbar: React.FC = () => {
  return (
    <div className="z-30 w-full h-14 bg-sky-50 rounded-lg shadow-lg px-6 flex justify-between items-center text-slate-600 py-2">
      <p className="font-semibold text-lg">Welcome Back</p>
      <Profile />
    </div>
  );
};

export default Navbar;
