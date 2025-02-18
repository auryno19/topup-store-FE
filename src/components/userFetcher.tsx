import { JWTPayload } from "jose";
import { verifyToken } from "../utils/verifyToken";
import { cookies } from "next/headers";

const UserFetcher = (): Promise<JWTPayload | null> => {
  return cookies().then((cookieStore) => {
    // Tunggu Promise dari cookies()
    const tokenFromCookies = cookieStore.get("token")?.value; // Ambil token dari cookies

    // console.log("Token from cookies:", tokenFromCookies);

    if (tokenFromCookies) {
      return verifyToken(tokenFromCookies) // Panggil verifyToken
        .then((userData) => {
          //   console.log("User  data:", userData.sub);
          return userData.sub ? { sub: userData.sub } : null; // Kembalikan data pengguna
        })
        .catch((error) => {
          console.error("Failed to verify token:", error);
          return null; // Kembalikan null jika terjadi kesalahan
        });
    }

    return Promise.resolve(null); // Kembalikan Promise yang terresolve dengan null jika tidak ada token
  });
};

export default UserFetcher;
