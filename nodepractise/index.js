// const path = require("node:path")
// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__dirname))
// console.log(path.parse(__filename))

// function greet(name){
//     console.log(`Hello ${name}`)
// }
// function greetUser(greetFn){
//     const name="Manohar"
//     greetFn(name)
// }
// greetUser(greet);
// =====================================================
// const Pizzshop = require('./pizza-shop')
// const DrinkMachine = require('./drink-machine')
//  const pizzaShop = new Pizzshop();
//  const drinkMachine = new DrinkMachine();
//  pizzaShop.on('order',(size,type)=>{
//     console.log(`Order received ${size} with ${type}`)
//     drinkMachine.serverdrink(size)
//  })
//  pizzaShop.order('large','Veg');
//  pizzaShop.displayOrderNumber();
// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()
// eventEmitter.on('onPizza',(size,type)=>{
//     console.log(`on pizza ${size} and ${type}`)
// })
// eventEmitter.on('onPizza',(size)=>{
//     if(size === 'large'){
//         console.log('serve the drink')
//     }
//     })
// eventEmitter.emit('onPizza',"large","Veg")
// =======================================================================
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// ================================================================================
// const buffer = new Buffer.from('Manoharam')
// buffer.write('Codeevalution')
// console.log(buffer.toString());
// console.log(buffer);
// console.log(buffer.toJSON());
// const t='MX'
// var romanToInt = function(s) {
//       const sym = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let result = 0;

//     for (let i = 0; i < s.length; i++) {
//         const cur = sym[s[i]];
//         const next = sym[s[i + 1]];

//         if (cur < next) {
//             result += next - cur;
//             i++;
//         } else {
//             result += cur;
//         }
//     }

//     return result;
// };
// file handling  in node js 
// console.log(romanToInt(t))
// const prompt = require("prompt-sync")({ sigint: true });
// const fs = require('fs');
// console.log("first")
// const fileContent = fs.readFileSync('./input.txt', 'utf8');
// console.log(fileContent);
// console.log("second")
// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
// console.log("third")
// const data = prompt("Enter your name")
// fs.writeFileSync('demo.txt',data)

// fs.writeFile('dem.txt',data,(err)=>{
//     if (err) throw err;
//     console.log('File written successfully');
// })

// console.log(Math.ceil(0.333333334)) 

// const fs = require('node:fs');

// const fileContent = fs.readFileSync('./input.txt', 'utf8');
// console.log(fileContent);
//  fs.readFile('./input.txt','utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data)
//  })
// const readbleStream = fs.createReadStream('./input.txt',{
//     encoding:'utf-8',
//     highWaterMark:2,
// });
// const writeableStream = fs.createWriteStream('./dem.txt');
//readbleStream.pipe(writeableStream);
// readbleStream.on('data', (chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk);
// })
//=================================================================================
//server creation in node js and return html template
// const http = require('http');
// const fs = require('fs')
// const data ={
//     name:'Manohar',
//     age:20
// }

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,'Content-Type', 'text/html');
//     // fs.createReadStream('./index.html').pipe(res);
//      let html = fs.readFileSync('./index.html', 'utf8');
//      html=html.replace("{{name}}", data.name);
//         res.end(html);
// })
// server.listen(4000,()=>{
//     console.log("server listening on port 3000!");
// });
//=================================================================================
const crypto = require("node:crypto");
const start = Date.now();
crypto.pbkdf2Sync('password','salt',100000,512,'sha512');
console.log(Date.now()-start);