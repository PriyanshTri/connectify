
import jwt from "jsonwebtoken"
import { user } from "../models/user.models.js";


const verifyAccessToken = (req, res, next) => {
    // Get the token from the cookies
    const token = req.cookies.accessToken;
  
    // Check if token is present
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, 'your_secret_key');
  
      // Attach decoded user information to the request object
      req.user = decoded;
  
      // Call next middleware
      next();
    } catch (error) {
      // Handle token verification errors
      return res.status(401).json({ message: 'Invalid token.' });
    }
  };