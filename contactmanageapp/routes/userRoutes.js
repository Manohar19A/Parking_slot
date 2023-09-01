const express = require('express')
const validateToken = require('../moddleware/validateToken')
const { login, register, current } = require('../controllers/userController');
const router = express.Router();
router.post('/register', register)
router.post('/login', login)
router.get('/current',validateToken,current)
module.exports = router;