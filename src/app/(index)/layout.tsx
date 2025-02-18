import "../globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import UserFetcher from "@/components/userFetcher";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const username = await UserFetcher();

  return (
    <>
      <Navbar user={username?.sub ?? null} />
      {children}
      <Footer />
    </>
  );
}
