const express = require('express')
const cors = require('cors');
const app = express();
const posts = {}
const bodyParser=require('body-parser');
const { default: axios } = require('axios');
app.use(bodyParser.json())
app.use(cors({origin: true}))
// app.get('/posts', (req, res) => {
// res.send(posts)
// })
app.post('/authenticate',async (req, res) => {
    const {username} = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',{username:username,secret:username,first_name:username},
            {headers:{"private-key":"da64ef76-330e-485a-9229-46484292187f"}}
        )
        return res.status(r.status).json(r.data);

    }catch(e){
        // return res.status(e.response.status).json(e.response.data);
        console.log(e)
    } 

    return res.json({username: username,secret:'sha256...'});
//     const id = Math.floor(Math.random() * 10000)
//     console.log(req.body)
// const {title} = req.body
//     posts[id]={
//            id,title
//     }
//     res.status(201).send(posts[id])

})
app.listen(4000, () => {
    console.log('listening on http://localhost:4000');
})