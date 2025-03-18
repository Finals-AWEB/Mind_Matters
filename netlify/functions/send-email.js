require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Message is required" }),
      };
    }

    console.log("📨 Sending email...");
    console.log("📧 To:", process.env.ADMIN_EMAIL);
    console.log("📌 Message:", message);

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "New Message from Website",
      text: `📩 New message received:\n\n${message}`,
    });

    console.log("✅ Email Response:", emailResponse);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Email sending failed", error: error.message }),
    };
  }
};
