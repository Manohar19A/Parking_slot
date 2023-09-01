const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authheader = req.headers.Authorization || req.headers.authorization;
    console.log("token", req.headers);
    if (authheader && authheader.startsWith('Bearer ')) {
        token = authheader.split(' ')[1];

        jwt.verify(token, 'access_token', ((err, decoded) => {
            if (err) throw new Error("Invalid Bearer token");
            console.log(decoded);
            req.user = decoded.user
            next();
        }))

    }
    if (!token) {
        res.status(403)
        throw new Error("Invalid Bearer token")
    }
})
module.exports = validateToken