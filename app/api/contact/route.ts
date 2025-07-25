import { NextResponse } from 'next/server';
import { isValidEmail, isValidPhone } from '@/lib/utils';

// Define the expected shape of the contact form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  service: string;
  message: string;
  budget?: string;
  contactMethod: 'email' | 'phone' | 'whatsapp';
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json() as ContactFormData;
    
    // Validate required fields
    const errors: Record<string, string> = {};
    
    if (!data.firstName?.trim()) errors.firstName = 'First name is required';
    if (!data.lastName?.trim()) errors.lastName = 'Last name is required';
    
    if (!data.email?.trim()) errors.email = 'Email is required';
    else if (!isValidEmail(data.email)) errors.email = 'Please enter a valid email address';
    
    if (!data.phone?.trim()) errors.phone = 'Phone number is required';
    else if (!isValidPhone(data.phone)) errors.phone = 'Please enter a valid phone number';
    
    if (!data.projectType) errors.projectType = 'Please select a project type';
    if (!data.service) errors.service = 'Please select a service';
    if (!data.message?.trim()) errors.message = 'Message is required';
    
    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would send an email here
    // Example using a service like SendGrid, Mailgun, etc.
    // await sendEmail({
    //   to: 'info@apexaluminum.com',
    //   subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    //   text: `
    //     Name: ${data.firstName} ${data.lastName}
    //     Email: ${data.email}
    //     Phone: ${data.phone}
    //     Company: ${data.company || 'N/A'}
    //     Project Type: ${data.projectType}
    //     Service: ${data.service}
    //     Budget: ${data.budget || 'N/A'}
    //     Preferred Contact Method: ${data.contactMethod}
    //     Message: ${data.message}
    //   `
    // });
    
    // For now, we'll just simulate a successful email send
    console.log('Contact form submission:', data);
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will contact you shortly.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}