// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken"; // Import fungsi verifikasi

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const publicPath = ["/", "/auth"]; // Rute publik
  const adminPath = ["/dashboard"]; // Rute admin

  const isPublicPath = publicPath.includes(path);
  const isAdminPath = adminPath.includes(path);
  console.log("Cookies:", req.cookies);

  const token = req.cookies.get("token")?.value;

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    if (!isPublicPath) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next(); // Izinkan akses ke rute publik
  }

  try {
    // Verifikasi token menggunakan fungsi terpisah
    const payload = await verifyToken(token);

    // Ambil data pengguna dari payload
    const userData = { username: payload.sub };

    // Simpan data pengguna di cookies tanpa httpOnly
    const response = NextResponse.next();
    response.cookies.set("user", JSON.stringify(userData), {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    }); // Set cookie tanpa httpOnly

    console.log("Decoded Token:", payload);
    console.log("user:", payload.sub);
    console.log("user data:", userData);
    console.log("user data:", response.cookies.get("user")?.value);

    // Logika pengalihan berdasarkan path
    if (isPublicPath && payload) {
      return NextResponse.next(); // Redirect ke dashboard jika sudah login
    }

    if (isAdminPath) {
      return NextResponse.next(); // Jika admin path, lanjutkan ke halaman admin
    }

    return response; // Kembalikan respons yang telah dimodifikasi
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect jika token tidak valid
  }
}

export const config = {
  matcher: ["/", "/dashboard", "/auth"], // Rute yang akan diproses oleh middleware
};
