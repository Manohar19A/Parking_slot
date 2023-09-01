const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const commentsByPostId={}
app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params])
    
})
app.post('/posts/:id/comments',(req,res)=>{
    const commentId = Math.floor(Math.random()*100000);
    const {content }=req.body;

    const comments = commentsByPostId[req.params.id]||[];
    comments.push({id:commentId, content});
    commentsByPostId[req.params.id] = comments
    res.status(201).send(comments);

});
app.listen(4001,()=>{
    console.log('listening on http://localhost:4001');
})