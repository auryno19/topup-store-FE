"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Definisikan tipe untuk konteks autentikasi
interface AuthContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

// Buat konteks dengan nilai default undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Buat AuthProvider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
