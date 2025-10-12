import { NextResponse } from 'next/server';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as fs from 'fs';

export async function GET() {
  try {
    // Construct path to the PDF in the public directory
    const cvPath = path.join(process.cwd(), 'public', 'CV Raey Portofolio Sept 2025.pdf');
    
    // Check if file exists before attempting to read
    if (!fs.existsSync(cvPath)) {
      console.error('CV file does not exist at path:', cvPath);
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    
    // Read the file
    const fileBuffer = await fsPromises.readFile(cvPath);
    
    // Convert Buffer to ArrayBuffer for NextResponse compatibility
    const uint8Array = new Uint8Array(fileBuffer);
    
    // Create response with proper headers for PDF viewing in browser
    const response = new NextResponse(uint8Array, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="CV-Raey-M-Yunus.pdf"',
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error opening CV:', error);
    
    // On Vercel, static files in the public directory should be directly accessible
    // at the root path, so alternatively you could redirect to the file directly
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}