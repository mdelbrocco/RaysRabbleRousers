"use client";

import { useState } from "react";
import { Trees, Lock, Eye, EyeOff } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface PasswordGateProps {
  onSuccess: () => void;
}

export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/verify-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      onSuccess();
    } else {
      setError(true);
      setPassword("");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pine-800 px-4">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <Trees className="w-16 h-16 text-amber-400" />
        </div>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-cream mb-2">{siteConfig.title}</h1>
        <p className="text-cream/70 text-lg mb-2">{siteConfig.subtitle}</p>
        <p className="text-cream/50 text-sm mb-10">
          {siteConfig.dates} &middot; {siteConfig.location}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`w-full pl-12 pr-12 py-3 rounded-lg bg-pine-700 text-cream placeholder-pine-400 border-2 focus:outline-none focus:ring-0 transition-colors ${
                error ? "border-red-400" : "border-pine-600 focus:border-amber-400"
              }`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-pine-400 hover:text-cream transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm">Wrong password. Try again.</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-lg bg-amber-400 text-pine-900 font-semibold hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Checking..." : "Let's Go"}
          </button>
        </form>
      </div>
    </div>
  );
}
