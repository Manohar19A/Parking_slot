// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import router from "./routes/userRoutes.js";
import authRoutes from "./routes/auths.js";
import userRoutes from "./routes/userRoutes.js";
// import cookieParser from 'cookie-parser';
//  const app = express();
//  app.get('/',(req,res)=>{
//     res.send("Hello")
// })
// dotenv.config();
// const connect =()=>{
//     mongoose.set("strictQuery",false)
//     mongoose.connect(process.env.mongo).then(()=>{
//         console.log('Connected to Mongo');
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// app.use(cookieParser);
// app.use(express.json());
// app.use('/user',router);
app.use('/api/users',userRoutes);
// app.use('/api/auth',authRoutes);
// // app.use('/api/auth',authRoutes)

//  app.listen(8000,()=>{
//     connect();
//     console.log('Listening on port 8000');
//  })
import * as jwt from 'jsonwebtoken'
// const client = jwt.
const encData = jwt.sign({name:'manohar'},process.env.SECRET);
const decData = jwt.verify(encData,process.env.SECRET)
console.log(decData,encData);