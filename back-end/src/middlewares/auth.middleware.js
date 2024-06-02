
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const verifyAccessToken = (req, res, next) => {
  const token = req.cookie.accessToken;

  // Check if token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, env.process.ACCESS_TOKEN_SECRET);

    // Attach decoded user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ message: "Invalid token." });
  }
};