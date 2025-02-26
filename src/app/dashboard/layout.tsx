import { Metadata } from "next";
import "../globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  title: {
    template: "Dashboard | %s",
    default: "Dashboard",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex p-3 flex-row gap-2">
        <Sidebar />
        <div className="flex flex-col w-full gap-2">
          <Navbar />
          <div className="px-6 py-4 w-full h-[85.5vh] text-slate-600 bg-sky-50 rounded-lg overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
