

import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";

//Controller for the register user functionlity.
export const registerUser = async (req, res) => {
  const {email, username, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      username,
      password:hashedPassword ,
    });
    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    console.error('Api Error',error);
    res.status(500).json({ message: "Server Error" });
  }
};
