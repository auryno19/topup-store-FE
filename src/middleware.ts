import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

// const secretKey = process.env.JWT_SECRET as string;
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function middleware(req: NextRequest) {
  console.log("Cookies:", req.cookies);
  console.log("cek");
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  //   const decoded = jwt.verify(token.value, secretKey);
  try {
    const { payload } = await jwtVerify(token, secretKey);
    console.log("Decoded Token:", payload);
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
