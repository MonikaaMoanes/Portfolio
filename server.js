import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 📩 Contact Form Endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
    from: process.env.EMAIL_USER, 
    replyTo: email,               
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: message,
    });


    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/", (req, res) => {
  res.send("Server is running ");
});

