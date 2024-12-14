import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    // Create a transporter for sending the email via Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address (must be stored in .env.local)
        pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
      },
    });

    // Set up the email options
    const mailOptions = {
      from: email, // Sender email (user's email)
      to: process.env.GMAIL_USER, // Receiver email (your Gmail address)
      subject: 'Contact Form Submission',
      text: `
        You have received a new message from the contact form.

        Name: ${firstName} ${lastName}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}