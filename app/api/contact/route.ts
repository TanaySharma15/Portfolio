import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Make sure to set these environment variables
// EMAIL = your email (Gmail or other SMTP)
// EMAIL_PASSWORD = app password or SMTP password
// RECIPIENT_EMAIL = your email where messages will be sent

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Compose email
    const mailOptions = {
      from: email, // sender
      to: process.env.RECIPIENT_EMAIL, // your email
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
