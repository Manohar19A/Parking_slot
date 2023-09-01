const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express();
app.use(express.json());
app.get("/",((req,res)=>{
    res.send("Welcome")
}))
dbConnect()
app.use('/api/contact',require("./routes/contactRoutes"))
app.use('/api/users',require("./routes/userRoutes"))
app.listen(8800,()=>{
    console.log('connected to server')
})