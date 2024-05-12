import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("PATHNAME", pathname);
  console.log("MIDDLEWARE");
  // Securely verify session using JWT token
  const token = await getToken({ req });
  const isAuthorized = !!token;
  console.log("IS AUTHORIZED", isAuthorized);
  /* 
    1. if user is on the root page and is authorized, redirect to /todos
    2. if user is on /todos and is not authorized, redirect to /

  */

  if (pathname === "/" && isAuthorized) {
    return NextResponse.redirect(new URL("/todos", req.url));
  }
}
