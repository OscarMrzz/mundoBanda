import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // Esto sincroniza la sesión (token) del navegador a las cookies httpOnly
  await createMiddlewareClient({ req, res });
  return res;
}

// Aplica en todas las rutas (puedes limitar con config si quieres)