import "../globals.css";
import Sidebar from "./components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex p-3 flex-row gap-2">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="w-full h-14 bg-sky-50 opacity-90 rounded-lg shadow-lg"></div>
          {children}
        </div>
      </div>
    </>
  );
}
