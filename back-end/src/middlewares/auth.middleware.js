
import jwt from "jsonwebtoken"
import { user } from "../models/user.models.js";

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // Check if token exists
        if (!token) {
            return res.status(400).json({ message: 'Invalid Access Token!' });
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Find the currentUser in the database
        const currentUser = await user.findById(decodedToken?._id).select("-password -refreshToken");

        // Check if the currentUser exists
        if (!currentUser) {
            return res.status(401).json({ message: 'Invalid Credentials' }); // Fixed typo here
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        // Handle errors
        return res.status(400).json({ message: 'An error occurred.' }); // Added a generic error message
    }
};