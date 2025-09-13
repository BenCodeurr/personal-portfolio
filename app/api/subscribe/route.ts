import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const API_KEY = process.env.MAILERLITE_API_KEY;
    
    if (!API_KEY) {
      console.error('MAILERLITE_API_KEY is not defined');
      throw new Error('Newsletter service configuration error');
    }

    console.log('Attempting to subscribe:', email);

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        status: 'active'
      }),
    });

    const data = await response.json();
    console.log('MailerLite API Response:', data);

    if (!response.ok) {
      console.error('MailerLite API Error:', data);
      throw new Error(data.message || 'Failed to subscribe');
    }

    return NextResponse.json({
      message: 'Successfully subscribed to the newsletter!',
      data: data
    });
    
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Something went wrong',
        details: error instanceof Error ? error.stack : undefined
      }, 
      { status: 500 }
    );
  }
}