import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export  async function POST (req, res) {
  const { body } = req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: myEmail,
      to: ['njengajimmy232@gmail.com', email],
      subject: subject,
      react: <>
        <h1>{subject}</h1>
        <p>Thank you for contacting James Njenga.</p>
        <p>{message}</p>
      </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
};
