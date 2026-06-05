"use client";

import { useSyncExternalStore } from "react";
import Cookies from "js-cookie";

export type Role = "crew" | "groom" | null;

// The auth cookie is only written on login (followed by a full reload) and
// cleared on logout, so there's nothing to subscribe to mid-session.
function subscribe() {
  return () => {};
}

function getSnapshot(): Role | undefined {
  const cookie = Cookies.get("rrr-auth");
  return cookie === "crew" || cookie === "groom" ? cookie : null;
}

// On the server (and the first hydration pass) the cookie can't be read, so
// report `undefined` ("not known yet") to keep server and client markup in
// sync. Once hydrated, getSnapshot resolves to the real role.
function getServerSnapshot(): Role | undefined {
  return undefined;
}

export function useAuth() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const loading = snapshot === undefined;
  const role: Role = snapshot ?? null;
  const authenticated = role !== null;
  const isCrew = role === "crew";

  return { authenticated, role, isCrew, loading };
}
