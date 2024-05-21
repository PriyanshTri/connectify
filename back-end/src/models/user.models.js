import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

//User Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String,
    },
})

export const user = mongoose.model("User", userSchema)