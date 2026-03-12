import type { NextRequest} from 'next/server';

import { NextResponse } from 'next/server';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Prevent spam - basic rate limiting by checking message length
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeSubject = subject ? escapeHtml(String(subject)) : 'No subject';
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br>');

    // Email service integration with Resend
    // If RESEND_API_KEY is not set, it will log to console (for development)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'mahadihasanfardin2015@gmail.com';
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    if (resendApiKey) {
      try {
        // Dynamic import to avoid bundling Resend in client-side code
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: senderEmail,
          to: recipientEmail,
          replyTo: email,
          subject: `[Portfolio] ${safeSubject} — from ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #B400D9;">New Contact Form Submission</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #B400D9;">
                <h3 style="color: #333;">Message:</h3>
                <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </div>
          `,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject ?? 'No subject'}\nSubmitted: ${new Date().toLocaleString()}\n\nMessage:\n${message}`,
        });

      } catch (emailError) {
        console.error('Resend email error:', emailError);
      }
    } else {
      console.log('Contact form submission (dev):', { name, email, subject, message, timestamp: new Date().toISOString() });
    }

    return NextResponse.json(
      { message: "Thank you for your message! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
