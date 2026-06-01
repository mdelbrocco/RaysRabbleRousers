import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correct = process.env.SITE_PASSWORD || "raysrabble2026";

  if (password.toLowerCase() === correct.toLowerCase()) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("rrr-auth", "authenticated", {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
