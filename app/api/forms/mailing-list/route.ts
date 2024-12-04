import { NextResponse } from 'next/server'
import { google } from 'googleapis'

// Keeping these imports commented for future email confirmation implementation
// import { resend } from '@/lib/resend'
// import { MailingListConfirmation } from '@/components/emails/mailing-list-confirmation'

// Health check endpoint
export async function GET() {
  console.log('GET request')
  return NextResponse.json({ data: 'hello' })
}

// Handles mailing list signup submissions
export async function POST(request: Request) {
  // Extract email from request body
  const req = await request.json()
  const { email } = req
  const date = new Date().toLocaleDateString()

  // Configure Google Sheets authentication
  // Requires GOOGLE_API_CLIENT_EMAIL and GOOGLE_API_PRIVATE_KEY env variables
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
      // Convert escaped newlines in private key to actual newlines
      private_key: process.env.GOOGLE_API_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    // Required scopes for spreadsheet operations
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  // Initialize Google Sheets API client
  const sheets = google.sheets({
    auth,
    version: 'v4',
  })

  // Append email and signup date to spreadsheet
  // Requires GOOGLE_EARLY_ACCESS_EMAIL_SPREADSHEET env variable
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: `${process.env.GOOGLE_EARLY_ACCESS_EMAIL_SPREADSHEET}`,
    range: 'Sheet1!A2', // Start at A2 to preserve header row
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[email, date]], // Add email and signup date as new row
    },
  })

  /*
   * Email confirmation functionality - temporarily disabled
   * Keeping this code as reference for when we implement email confirmations
   * Requires Resend API key and email template setup
   *
   * await resend.emails.send({
   *   from: 'noreply@keeg.in',
   *   to: email,
   *   subject: '🤖 Thanks for signing up to the mailing list!',
   *   react: MailingListConfirmation({ firstName }),
   * })
   */

  return NextResponse.json(response.data)
}
