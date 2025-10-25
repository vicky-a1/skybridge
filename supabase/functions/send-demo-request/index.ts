import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@6.2.2";

const resend = new Resend("re_NsyWj9rB_8D5s2eHctd5PFiwkqoSwWdpF");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Demo request function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: DemoRequestData = await req.json();
    console.log("Received demo request:", { ...requestData, email: "***" });

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
              <td style="padding: 10px; border: 1px solid #dee2e6;">${requestData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${requestData.email}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${requestData.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">${requestData.phone}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h2 style="color: #555; font-size: 18px;">Message</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
            ${requestData.message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 12px;">
          <p>This is an automated message from the SkyBridge website demo request form.</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "SkyBridge Demo <onboarding@resend.dev>",
      to: ["contact.skybride@gmail.com"],
      subject: `New Demo Request from ${requestData.name} - ${requestData.company}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Demo request sent successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-demo-request function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
