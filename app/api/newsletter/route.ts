import { NextResponse } from 'next/server';
import { isValidEmail } from '@/lib/utils';

// Define the expected shape of the newsletter signup data
interface NewsletterSignupData {
  email: string;
  name?: string;
  interests?: string[];
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json() as NewsletterSignupData;
    
    // Validate required fields
    if (!data.email?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }
    
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would integrate with an email service
    // like Mailchimp, ConvertKit, SendGrid, etc.
    // Example:
    // await addToMailingList({
    //   email: data.email,
    //   firstName: data.name?.split(' ')[0],
    //   lastName: data.name?.split(' ').slice(1).join(' '),
    //   interests: data.interests || [],
    //   tags: ['website-signup'],
    //   source: 'website'
    // });
    
    // For now, we'll just log the subscription
    console.log('Newsletter signup:', {
      email: data.email,
      name: data.name,
      interests: data.interests,
      timestamp: new Date().toISOString()
    });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
    
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your subscription. Please try again later.' 
      },
      { status: 500 }
    );
  }
}