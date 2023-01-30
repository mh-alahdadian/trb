// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const cache = {};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.startsWith("/p")) {
    const response = NextResponse.next();
    response.cookies.set("vercel", "fast");
    response.cookies.set({
      name: "vercel",
      value: "fast",
      path: "/test",
    });
  }
}
