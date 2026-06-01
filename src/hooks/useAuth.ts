"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export type Role = "crew" | "groom" | null;

export function useAuth() {
  const [role, setRole] = useState<Role>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookie = Cookies.get("rrr-auth");
    if (cookie === "crew" || cookie === "groom") {
      setRole(cookie);
    }
    setLoading(false);
  }, []);

  const authenticated = role !== null;
  const isCrew = role === "crew";

  return { authenticated, role, isCrew, loading };
}
