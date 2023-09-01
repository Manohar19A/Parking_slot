// // var mysql = require('mysql');

// // var con = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "Manohar@519"
// // });
// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// //   var sql = "CREATE TABLE mydb.customer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
// //   con.query(sql, function (err, result) {
// //     if (err) throw err;
// //     console.log("Table created");
// //   });
// // });
// // =================
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   secure: true,
//   auth: {
//     user: 'manoharchimata@gmail.com',
//     pass: '9908816733@Mano'
//   }
// });
// transport: {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'contact@gmail.com',
//     pass: 'app password',
//   },
// },

// var mailOptions = {
//   from: 'manoharchimata@gmail.com',
//   to: 'chimatamanohar519@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// //   con.connect(function(err){
// //     if(err) throw err;
// //     console.log("connected");
// //     var sql = "query"
// //     con.query(sql,function(err,result){
// //         if(err) throw err;
// //         console.log("created")
// //     })
// //   })
// import readline module
// const readline = require("readline");

// // create interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // create empty user input
// let userInput = "";

// // question user to enter name
// rl.question("What is your name\n", function (string) {
//   userInput = string;

//   console.log("Your name is " + userInput);

//   // close input stream
//   rl.close();
// });
// var arguments = process.argv ;

// console.log(arguments) ;
// const prompt = require("prompt-sync")({ sigint: true });
// const options =[{option:"Option1"},{option:"Option2"},{option:"Option3"},{option:"Option4"}]
// const option1="1.Book Slot"
// const option2="2.Get A Car"
// const option3="3.Get Count"
// const option4="4.Exit"
// const age = prompt("Select your options...\n"+option1 +"\n"+option2 +"\n"+option3 +"\n"+option4 );
// console.log( age );
// if(age === 1){
//   prompt("Enter slot")
// }else if(age === 2){
//   prompt("Enter car")
// }else if(age === 3){
//   prompt("Please enter")
// }


// console.log(`You are ${age} years old.`);
var fs = require("fs");
var crypto = require("crypto");
fs.readFile("./text.txt", function(err, data){
  console.log(data)
})
const start = Date.now();
crypto.pbkdf2Sync('password','salt',10000,512,'sha512')
console.log(Date.now()-start);
