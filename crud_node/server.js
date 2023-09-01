import express from 'express'
import mongoose from 'mongoose'
import Product from "./ss/productModel.js"
const app = express()
app.listen(5000,()=>{
    console.log('server is running')
})
app.use(express.json())
//route
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/products',async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message});
    }
})
app.get('/find/:id',async(req,res)=>{
    console.log(req.params)
    const {id}=req.params
    try{
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message});
    }
})
app.put("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!product) return res.status(404).json({message:"No such product found"});
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message});
    }

})
app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        const product = await Product.findByIdAndDelete(id);
        if(!product) return res.status(404).json({message:"No such product found"});
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message});
    }
})
app.post('/product',async(req,res)=>{
   try{
    const product = await Product.create(req.body)
    res.status(200).json(product);
    
   }
   catch(err){
       console.log(err.message)
       res.status(500).json({message: err.message});
   }
})
mongoose.connect("mongodb+srv://admin:root@cluster0.d6rredu.mongodb.net/?retryWrites=true&w=majority").then((re)=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)})