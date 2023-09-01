const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const register = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required")
    }
    const availableUser = await User.findOne({ email: email })
    if (availableUser) {
        res.status(400)
        throw new Error("Email is already available")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashedPassword", hashedPassword)
    const user = await User.create({ username, email, password: hashedPassword })
    if (user) {
        res.status(200).json({ id: user.id, email: user.email, username: user.username })
    } else {
        res.status(400)
        throw new Error("User data is invalid")
    }
})
const login = asyncHandler(async (req, res) => {
    const {email, password} =req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Email or password is required")
    }
    const user = await User.findOne({ email: email})
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = await jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id
            },
        },"access_token",{
            expiresIn:'15m'
        })
        res.status(200).json({accessToken:accessToken})

    }else{
        res.status(403)
        throw new Error("invalid uername or email") 
    }
    
})
const current = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})
module.exports = { register, login, current }