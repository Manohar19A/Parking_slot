const http =require('http')
const getRequest = require('./methods/getMethod')
const postRequest = require('./methods/getMethod')
const putRequest = require('./methods/getMethod')
const deleteRequest = require('./methods/getMethod')
const movies = require('./data.json')
require('dotenv').config();
const PORT = process.env.PORT || 5001;
const server = http.createServer((req,res)=>{
    req.movies = movies
    switch(req.method){
        case 'GET':
            getRequest(req,res);
            break;
        case 'POST':
            postRequest(req,res);
            break;
        case 'PUT':
            putRequest(req,res);
            break;
        case 'DELETE':
            deleteRequest(req,res);
            break;
        default:
            res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        message: 'Route not found'
    }))
res.end();


    }
    
})
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})