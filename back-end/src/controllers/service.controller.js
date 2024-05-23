import expressAsyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import { generateOTP } from '../services/otp.service.js';

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
  const { email } = req.body;
  if(!email) {
    return res.status(404).json({message: 'Invalid Email!'})
  }

  const otp = generateOTP();

  var mailOptions = {
    from: 'process.env.SMTP_MAIL',
    to: email,
    subject: 'OTP Verification',
    html: `<p>Your OTP is ${otp}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({otp:otp});
    }
  });
});
