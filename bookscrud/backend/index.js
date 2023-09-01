import express from 'express'
import mysql  from 'mysql'
import cors from 'cors'
const app = express()

const db =mysql.createConnection({
    host: 'localhost',
    user: 'manohar',
    password: 'Manohar@519',
    database: 'userlogin'
})
app.use(express.json())
app.use(cors())
app.get('/', (req, res) =>{
    res.json('hello world')
})
app.get('/books', (req, res) =>{
    const query = "SELECT * FROM new_table"
    db.query(query, (err, result) =>{
        if(err) throw err
        res.json(result)
    })

})
// export const getPost = (req, res) => {
//     const q = "SELECT p.id ,`username`, `title`, `desc`, p.img, u.image AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
//     db.query(q, [req.params.id], (err, data) => {
//         if (err) return res.status(404).json({ err })
//         return res.status(200).json(data[0])
//     })
// }
app.get('/books/:username/:firstname',(req,res)=>{
    const q = 'select * from new_table where username=? and firstname=?'
    db.query(q,[req.params.username,req.params.firstname],(err,data)=>{
        if(err) return res.status(404).json({err})
        return res.status(200).json(data)
    })

})
// export const updatePost = (req, res) => {
//     const token = req.body.token;
//     if (!token) return res.status(401).json("Not authenticated!");

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if (err) return res.status(403).json("Token is not valid!");

//         const postId = req.params.id;
//         const q =
//             "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

//         const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

//         db.query(q, [...values, postId, userInfo.id], (err, data) => {
//             if (err) return res.status(500).json(err);
//             return res.json("Post has been updated.");
//         });
//     });
// };
// let sql = `UPDATE todos
//            SET completed = ?
//            WHERE id = ?`;

// let data = [false, 1];

// // execute the UPDATE statement
// connection.query(sql, data, (error, results, fields) => {
//   if (error){
//     return console.error(error.message);
//   }
//   console.log('Rows affected:', results.affectedRows);
// });
app.put('/books/:username',(req,res)=>{
    console.log(req.body)
    // let name=req.body.firstname;
    // const q =`UPDATE new_table SET firstname=?,lastname=?,password=?,dob=?,gender=?,address=? WHERE username = ?`;
    // let sqlQuery = `UPDATE new_table SET firstname= ${req.body.firstname},lastname=${req.body.lastname},password=${req.body.password},dob=${req.body.dob} WHERE username = ${req.params.username}`;
    const values = [req.body.lastname,req.body.email,req.body.password,req.body.dob,req.body.gender];
    // let da=[values,req.params.username]
    const q="UPDATE new_table SET `lastname`=?,`email`=?,`password`=?,`dob`=? `gender`=? WHERE `username` = ?";
    // const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    db.query(q,[values,req.params.username], (err, data) => {
                  if (err) return res.status(500).json(err);
                 return res.json("Post has been updated.");
                });

})
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO books(`title`,`desc`,`cover`) VALUES(?)";
//     // const values = [req.body.title, req.body.desc, req.body.cover]
//     con.query(sql[values], function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

app.post('/book',(req,res)=>{
    const q = "INSERT INTO new_table(`firstName`,`lastName`,`email`,`password`,`confirmPassword`,`dob`,`address`,`number`,`gender`,`username`) VALUES(?)"
    const values = [req.body.firstName, req.body.lastName, req.body.email,req.body.password, req.body.confirmPassword,req.body.address, req.body.number, req.body.dob,req.body.gender,req.body.username]
    db.query(q,[values],(err,data)=>{
        if(err){
            console.log("not created",err)
            return "Not Created"
        } 
       return  res.json(data)
    });
});

app.listen(9000,()=>{
    console.log('listening on 9000')
})
