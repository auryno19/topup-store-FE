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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex p-3 flex-row gap-2">
        <Sidebar />
        <div className="flex flex-col w-full gap-2">
          <Navbar />
          <div className="px-6 py-4 text-slate-600 bg-sky-50 opacity-90 h-full rounded-lg z-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
