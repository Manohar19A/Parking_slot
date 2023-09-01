const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const { User } = require('../models/user')
const router = express.Router()
router.post('/', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    // console.log(user._id)
    if (!user) {
       return res.status(400).send({ message: "Invalid email or password" })
    }
    const token = await jwt.sign({ _id: user._id, email: user.email, name: user.name },
        "superkey115")
    if (user && (bcrypt.compare(password, user.password))) {
        res.status(200).send({ accessToken: token })
    }
    return res.status(400).send({message:"Invalid password or Email address"})
})
module.exports = router