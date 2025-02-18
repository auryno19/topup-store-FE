// utils/verifyToken.ts
import { jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET is not set.");
  }
  return secret;
};

export const verifyToken = async (token: string) => {
  const secretKey = new TextEncoder().encode(getJwtSecretKey());
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Unauthorized");
  }
};
