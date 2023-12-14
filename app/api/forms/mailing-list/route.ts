import { NextResponse } from 'next/server'
import { google } from 'googleapis'

// import { resend } from '@/lib/resend'
// import { MailingListConfirmation } from '@/components/emails/mailing-list-confirmation'

export async function GET() {
  console.log('GET request')
  return NextResponse.json({ data: 'hello' })
}

export async function POST(request: Request) {
  const req = await request.json()

  const { firstName, lastName, email, company } = req

  console.log('firstName', firstName)
  console.log('lastName', lastName)
  console.log('email', email)
  console.log('company', company)

  const date = new Date().toLocaleDateString()

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_API_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  const sheets = google.sheets({
    auth,
    version: 'v4',
  })

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: `${process.env.GOOGLE_EARLY_ACCESS_EMAIL_SPREADSHEET}`,
    range: 'Sheet1!A2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[firstName, lastName, email, company, date]],
    },
  })

  // await resend.emails.send({
  //   from: 'noreply@recopyai.com',
  //   to: email,
  //   subject: '🤖 Thanks for signing up for RecopyAI early access!',
  //   react: MailingListConfirmation({ firstName }),
  // })

  return NextResponse.json(response.data)
}
