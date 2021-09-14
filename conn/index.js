const mongoose = require('mongoose');

function Conn(user, pass){
    mongoose.connect(`mongodb://localhost:27017/tarefas`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
    mongoose.connection
}

module.exports = Conn;