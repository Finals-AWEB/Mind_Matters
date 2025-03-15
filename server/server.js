require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
    const { message } = req.body;
  
    if (!message) {
      return res.status(400).json({ success: false, message: "Message is required" });
    }
  
    try {
      console.log("📨 Sending email...");
      console.log("📧 To:", process.env.ADMIN_EMAIL);
      console.log("📌 Message:", message);
  
      const emailResponse = await resend.emails.send({
        from: "onboarding@resend.dev", // Make sure this email is verified in Resend
        to: process.env.ADMIN_EMAIL,
        subject: "New Message from Website",
        text: `📩 New message received:\n\n${message}`,
      });
  
      console.log("✅ Email Response:", emailResponse);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("❌ Error sending email:", error);
      res.status(500).json({ success: false, message: "Email sending failed", error: error.message });
    }
  });
  

app.listen(3000, () => console.log("Server running on port 3000"));
