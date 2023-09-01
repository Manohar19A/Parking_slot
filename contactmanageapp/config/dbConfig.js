const mongoose = require('mongoose')
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://admin:admin@cluster0.vyoys.mongodb.net/contacts?retryWrites=true&w=majority')
        console.log("Connect", connect.connection.host, connect.connection.name)

    }
    catch (err) {
        console.log(err)
        process.exit(1);
    }
}
module.exports = dbConnect