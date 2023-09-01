const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const { User } = require('../models/user')
const router = express.Router()
router.post('/', async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new Error('Invalid username and password')
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        res.status(400).json({ message: 'User alerady exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    user = await User.create({ email: email, password: hashedPassword, name: name })
    if (!user) {
        res.status(400).json({ message: 'Something went wrong' })
    }
    else {
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        }, 'superkey115')
        res.send(token)

    }
    //     const schema = Joi.object({
    //         name: Joi.string().max(50).min(3).required(),
    //         email: Joi.string().max(50).min(3).required(),
    //         password: Joi.string().max(50).min(6).required(),
    //     })
    //    const{error}= schema.validate(req.body)
    //    if(error) return res.status(400).send(error.details[0].message)
    //    let user = await User.findOne({email:req.body.email});
    //    if(user) return res.status(400).send("User already exist..")
    //    user = new User({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
    //    })
    //    const salt = bcrypt.genSalt(10)
    //    user.password =  bcrypt.hash(user.password,salt)
    //    await user.save()

})
module.exports = router;