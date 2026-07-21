import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const SECRET = process.env.REVALIDATE_SECRET ?? 'abel-geo-revalidate-2026';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== SECRET) {
    return NextResponse.json({ error: 'invalid secret' }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get('path') ?? '/blog';
  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}
