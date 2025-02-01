import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const SHEET_ID = '1jJRBPJQruotoB7zWT1npmjsULmk2oAo09AxjcGpXFEo';
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  // Handle CORS
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  });

  try {
    const { name, email, message, phone } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    // Get current date
    const now = new Date();
    const humanReadableDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1', // Let Google auto-find next row
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phone || '', email, message, humanReadableDate]],
      },
    });

    return new NextResponse(
      JSON.stringify({ success: true, message: 'Data saved successfully!' }),
      { status: 200, headers }
    );
  } catch (error: any) {
    console.error('Error saving data:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to save data' }),
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}