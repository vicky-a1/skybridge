export interface DemoRequestData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || "re_NsyWj9rB_8D5s2eHctd5PFiwkqoSwWdpF";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contact.skybride@gmail.com";

export async function sendDemoRequest(data: DemoRequestData): Promise<{ success: boolean; message: string }> {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Demo Request - SkyBridge
        </h1>
        
        <div style="margin: 20px 0;">
          <h2 style="color: #555; font-size: 18px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${data.email}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${data.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${data.phone || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h2 style="color: #555; font-size: 18px;">Message</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 12px;">
          <p>This is an automated message from the SkyBridge website demo request form.</p>
          <p>Please respond to the customer at: ${data.email}</p>
        </div>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SkyBridge Demo <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        subject: `New Demo Request from ${data.name}${data.company ? ` - ${data.company}` : ''}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Email API error: ${errorData.message || response.statusText}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return {
      success: true,
      message: 'Demo request sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
}