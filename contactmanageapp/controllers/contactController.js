const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if (!contacts) {
        res.status(404)
        throw new Error('Couldn\'t find contact');
    }
    res.status(200).json(contacts)
})
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({userId:req.user.id});
    console.log(contacts)
    res.status(200).json(contacts)
})
const postContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        throw new Error('All fields are required')
    }
    console.log(req.body)
    const contacts = await Contact.create({ name: name, email: email, phone: phone,userId:req.user.id })
    res.status(201).json(contacts)
})
const updatedContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if (!contacts) {
        res.status(404)
        throw new Error("Contact not found");
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updated)
})
const deleteContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if (!contacts) {
        res.status(404)
        throw new Error('Contact not found')
    }
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contacts)
})
module.exports = { getContact, postContact, deleteContact, updatedContact, getContacts }