import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'fs/promises';

export async function GET(request: NextRequest) {
  try {
    // Path to your CV file in the public folder
    const cvPath = path.join(process.cwd(), 'public', 'CV Raey Portofolio Sept 2025.pdf');
    
    // Read the file
    const fileBuffer = await readFile(cvPath);
    
    // Create response with proper headers for PDF viewing in browser
    const response = new NextResponse(fileBuffer);
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', 'inline; filename="CV-Raey-M-Yunus.pdf"');
    
    return response;
  } catch (error) {
    console.error('Error opening CV:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}