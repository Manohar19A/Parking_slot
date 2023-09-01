import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import multer from 'multer'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import { register } from './controllers/auth.js'
// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config();
const app  = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.urlencoded({
    extended: true,limit:'30mb'
  }));
app.use(bodyParser.json({limit:'30mb', extended:true}))
// app.use(bodyParser().urlencoded({limit:'30mb', extended:true}))
app.use(cors())

app.use('/assets', express.static(path.join(__dirname,'public/assets')));
//File stroge
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'assets/public')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})
app.post('/auth/register',upload.single('picture'),register)
app.get("/test",((req,res)=>{
   return res.send("kdkkekek")
}))
 app.get('/',(req,res)=>{
    res.send("Hello")
})
const PORT = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
}).catch((err)=>{
    console.log(`${err} did not connect to ${PORT}` )
})