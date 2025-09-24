import { NextResponse } from "next/server";

// No-op middleware to satisfy Next.js requirement
export function middleware() {
  return NextResponse.next();
}

export const config = { matcher: [] };


