const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const app = require("express")();
const path = require("path");

// const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "RAZORPAY KEY",
  key_secret: "RAZORPAY SECRET",
});

require('dotenv').config()
const register=require('./routes/register')
const login=require('./routes/login')
const products = require('./products');
const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Welcome to online server')
})
app.get("./fake-app-logo.png", (req, res) => {
    res.sendFile(path.join(__dirname, "logo.png"));
  });
  const payment_capture = 1;
const amount = 499;
const currency = "INR";

const options = {
  amount: amount * 100,
  currency,
  receipt: shortid.generate(),
  payment_capture,
};
app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
app.use('/api/register',register)
app.use('/api/login',login)
app.get('/products',(req,res)=>{
    res.send(products)
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})
mongoose.connect('mongodb+srv://admin:admin@cluster0.vyoys.mongodb.net/e-commerce?retryWrites=true&w=majority').then(()=>{
    console.log('connection established');

}).catch((err)=>{
    console.log('error connecting');
})