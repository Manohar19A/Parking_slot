const express = require('express');
const router = express.Router();
const {getContact,updatedContact,deleteContact,postContact,getContacts}= require('../controllers/contactController');
const validateToken = require('../moddleware/validateToken');
router.use(validateToken)
router.get('/',getContacts)
router.post('/',postContact)
router.put('/:id',updatedContact)
router.get('/:id',getContact)
router.delete('/:id',deleteContact)
module.exports = router;