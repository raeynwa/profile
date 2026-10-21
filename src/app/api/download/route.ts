import {NextResponse} from 'next/server';

// Keep the existing endpoint while serving the latest supplied PDF as a download.
export function GET(request: Request) {
  return NextResponse.redirect(new URL('/cv/CV_Raey_Maulana_Yunus_2026.pdf', request.url), 307);
}
