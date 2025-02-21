// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken"; // Import fungsi verifikasi

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const publicPath = ["/", "/auth"];
  const adminPath = ["/dashboard"];
  const authPath = ["/login", "/register"];

  const isPublicPath = publicPath.includes(path);
  const isAdminPath = adminPath.includes(path);
  const isAuthPath = authPath.includes(path);
  console.log("Cookies:", req.cookies);

  const token = req.cookies.get("token")?.value;

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    if (isAdminPath) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } else {
    if (isAuthPath) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  try {
    const payload = await verifyToken(token);

    const response = NextResponse.next();

    if (isPublicPath && payload) {
      return NextResponse.next();
    }

    if (isAdminPath) {
      return NextResponse.next();
    }

    return response;
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
