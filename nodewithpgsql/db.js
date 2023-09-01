const { Pool, Client } = require('pg');

const config = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Manohar@519',
    port: 5432,
})
const pool = new Pool(config);
// or
const client = new Client(config);

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    // Perform database operations using the client instance
  });
  client.query('SELECT * FROM postgres', (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows); // Access the query result
  });
//   client.release(); // Release the client back to the pool
//   or
   //client.end(); // End the client connection
    
  
// client.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
// const connectDb = async () => {
//     try {

//         await client.connect()
//         const res = await client.query('SELECT * FROM some_table')
//         console.log(res)
//         await client.end()
//     } catch (error) {
//         console.log(error)
//     }
// }
// connectDb()