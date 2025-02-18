"use client";

import { useAuth } from "@/app/context/authContext";
import { cookies } from "next/headers";
import { useEffect } from "react";

const TokenSetter = () => {
  const { setToken } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      const cookieStore = await cookies();
      const tokenFromCookies = cookieStore.get("token")?.value;

      if (tokenFromCookies) {
        setToken(tokenFromCookies);
      }
    };

    fetchToken();
  }, [setToken]);

  return null;
};
export default TokenSetter;
