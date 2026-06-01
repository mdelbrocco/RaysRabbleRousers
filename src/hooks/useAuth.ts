"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthenticated(Cookies.get("rrr-auth") === "authenticated");
    setLoading(false);
  }, []);

  const login = async (password: string): Promise<boolean> => {
    const res = await fetch("/api/verify-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  return { authenticated, loading, login };
}
