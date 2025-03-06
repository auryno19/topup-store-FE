import { JWTPayload } from "jose";
import { verifyToken } from "../utils/verifyToken";
import { cookies } from "next/headers";

const UserFetcher = (): Promise<JWTPayload | null> => {
  return cookies().then((cookieStore) => {
    const tokenFromCookies = cookieStore.get("token")?.value;

    if (tokenFromCookies) {
      return verifyToken(tokenFromCookies)
        .then((userData) => {
          return userData.sub ? { sub: userData.sub } : null;
        })
        .catch((error) => {
          cookieStore.delete("token");
          console.error("Failed to verify token:", error);
          return null;
        });
    }

    return Promise.resolve(null);
  });
};

export default UserFetcher;
