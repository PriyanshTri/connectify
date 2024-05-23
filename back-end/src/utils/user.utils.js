import { user } from "../models/user.models.js"
import jwt from 'jsonwebtoken'

export const generateAccessAndRefereshTokens = async (userId) =>{
    try {
        const currentUser = await user.findById(userId)
        const accessToken = generateAccessToken(currentUser)  
        const refreshToken = generateRefreshToken(currentUser)

        currentUser.refreshToken = refreshToken
        await currentUser.save({ validateBeforeSave: false })
        return {accessToken, refreshToken}
    } catch (error) {
        console.log('error', error)
    }
}

const generateAccessToken = (currentUser) => {
    return jwt.sign(
        {
            _id: currentUser._id,
            username: currentUser.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const generateRefreshToken = (currentUser) => {
    return jwt.sign(
        {
            _id: currentUser._id,
            username: currentUser.username,            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}