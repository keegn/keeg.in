// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

export default async function submitEmail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = JSON.parse(req.body)

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
    spreadsheetId: `${process.env.GOOGLE_KEEGIN_NEWSLETTER_EMAIL_SPREADSHEET}`,
    range: 'Sheet1!A2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[email, date]],
    },
  })

  return res.status(201).json({
    data: response.data,
  })
}
