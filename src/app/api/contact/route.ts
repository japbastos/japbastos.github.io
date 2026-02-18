import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // 1. Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: 'Failed spam verification' },
        { status: 400 }
      );
    }

    // 2. Forward to Google Apps Script
    const scriptResponse = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    if (!scriptResponse.ok) {
      const errorText = await scriptResponse.text();
      console.error(`Script error status: ${scriptResponse.status}`);
      console.error(`Script error body: ${errorText}`);
      throw new Error(`Google Script Error: ${scriptResponse.status}`);
    }

    const resultData = await scriptResponse.json();
    
    if (resultData.result !== 'success') {
      console.error('Script internal error:', resultData);
      throw new Error(`Google Script Internal Error: ${resultData.error || 'Unknown error'}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
