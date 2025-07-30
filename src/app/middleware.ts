import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function middleware(_req: NextRequest) {
  // Temporarily disabled Supabase middleware for UI changes
  return NextResponse.next();
}

// Aplica en todas las rutas (puedes limitar con config si quieres)