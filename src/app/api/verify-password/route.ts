import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const crewPassword = process.env.SITE_PASSWORD || "rabblerouser2026";
  const groomPassword = process.env.GROOM_PASSWORD || "ericray2026";

  const inputLower = password.toLowerCase();
  let role: "crew" | "groom" | null = null;

  if (inputLower === crewPassword.toLowerCase()) {
    role = "crew";
  } else if (inputLower === groomPassword.toLowerCase()) {
    role = "groom";
  }

  if (role) {
    const res = NextResponse.json({ success: true, role });
    res.cookies.set("rrr-auth", role, {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
