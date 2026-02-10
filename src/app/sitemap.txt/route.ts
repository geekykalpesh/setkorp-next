import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    'https://setkorp.ae/',
    // Add other URLs here as they are created
  ];

  return new NextResponse(urls.join('\n'), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
