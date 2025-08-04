import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend("re_Gb9xwu6V_B3KReVpZ7AzRMuza41vLjrmi");

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'artur.szady@futbolkolektyw.pl',
      to: process.env.TO_EMAIL || 'devepolers@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4F46E5;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This message was sent from the DevePolers Games website contact form.<br>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      // Set reply-to to the sender's email
      replyTo: email,
    });

    console.log('Email sent successfully:', result);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return different error messages based on the error type
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Email service configuration error' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}