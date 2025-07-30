import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // Temporarily disabled Supabase middleware for UI changes
  // await createMiddlewareClient({ req, res });
  return res;
}

// Aplica en todas las rutas (puedes limitar con config si quieres)