module.exports = function () {
    let mongoose = require('mongoose');
    let uri = "mongodb://darshanpanse:yEvBerLd6MD4I1mY@soffra-shard-00-00-ptyij.mongodb.net:27017,soffra-shard-00-01-ptyij.mongodb.net:27017,soffra-shard-00-02-ptyij.mongodb.net:27017/soffra?ssl=true&replicaSet=soffra-shard-0&authSource=admin";
    mongoose.connect(uri);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Connected Successfully to the database'));
}