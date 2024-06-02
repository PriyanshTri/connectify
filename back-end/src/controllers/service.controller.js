import expressAsyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import express from 'express'
import { generateOTP } from '../services/otp.service.js';
import cookieparser from 'cookie-parser';
import { generateTokens } from '../utils/user.utils.js';


//To access .env variables.
dotenv.config();
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, username } = req.body;
  if (!email) {
    return res.status(404).json({ message: 'Invalid Email!' });
  }

  const otp = generateOTP();

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: 'OTP Verification',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Email</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
  
        <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333333; margin-bottom: 20px;">Hi, ${username}</h2>
          <p style="color: #333333;">We're excited to have you on board with Connectify!</p>
          <p style="color: #333333;">Your OTP for verification is: <strong>${otp}</strong></p>
          <p style="color: #333333;">Please use this OTP to complete your verification process.</p>
          <p style="color: #333333;">If you didn't request this OTP, please ignore this email.</p>
          <p style="color: #333333;">Best regards,<br> The Connectify Team</p>
        </div>
  
      </body>
      </html>
    `
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
    } else {
      if (!username) {
        const accessToken =  await generateTokens(email)
        const options = {
          httpOnly: true,
          secure: false,
          domain: 'localhost'
        };
        res.cookie('accessToken', accessToken, options);
        res.status(200).json({ otp: otp, accessToken: accessToken });
      }else {
        res.status(200).json({ otp: otp });
      }     
    }
  });
});
