var http = require('http')
const { getProducts, getProduct } = require('./controllers/productController')
const products = require('./product.json')
const server=http.createServer((req,res)=>{
    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req,res)
        // res.writeHead(200,{'Content-Type':'application/json'})
        // res.end(JSON.stringify(products)) 
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method==='GET'){
        const id = req.url.split('/')[3]
        console.log(id)
        getProduct(req,res,id)
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Not Found'}))
    }
    // res.statusCode = 200
    // res.setHeader('Content-Type','text/html')
    // res.write('<h1>Hello World</h1>')
    // res.end()
  
})
const PORT = process.env.PORT || 5000
server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))