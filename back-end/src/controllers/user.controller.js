

import { user } from "../models/user.models.js";
import bcrypt from 'bcrypt';
import { generateAccessAndRefereshTokens } from "../utils/user.utils.js";

//Controller for the register user functionlity.
export const registerUser = async (req, res) => {
  const {email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if the email already exists
    // const existingUser = await user.findOne({ email });
    // // if (existingUser) {
    // //   return res.status(400).json({ message: "User already exists" });
    // // }

    // Create a new user
    const newUser = new user({
      email,
      username,
      password:hashedPassword ,
    });
    await newUser.save();

    // Exclude the password from the response
    const { password,...userWithoutPassword } = newUser.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error('Api Error',error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const ifUserNameExists = async (req, res) => {
  // Logic to check if username exists
  const { username, email } = req.body;
  try {
    const usernameExists = await user.findOne({ username });
    const emailExists = await user.findOne({ email });
    let message = '';

    if (usernameExists) {
      message += "Username already exists. ";
    } else {
      message += "Username is available. ";
    }

    if (emailExists) {
      message += "Email already exists.";
    } else {
      message += "Email is available.";
    }

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


//Controller for the login.
export const loginUser = async (req, res) => {
  const { email, username, password } = req.body;

  if(!email){
    res.status(401).json({message: 'Invalid Credentials.'})
  }
  
  try {
     const currentUser = await user.findOne({
        $or: [{username}, {email}]
    })
    
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, currentUser.password);

    // Check if the password is correct
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      currentUser._id
    ); 

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({  
         accessToken: accessToken
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

