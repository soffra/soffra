module.exports = function (app) {
  var MongoClient = require('mongodb').MongoClient;
  var assert = require('assert');

  var mongoose = require('mongoose');
  mongoose.Promise = require('q').Promise;
  var uri = "mongodb://darshanpanse:yEvBerLd6MD4I1mY@soffra-shard-00-00-ptyij.mongodb.net:27017,soffra-shard-00-01-ptyij.mongodb.net:27017,soffra-shard-00-02-ptyij.mongodb.net:27017/soffra?ssl=true&replicaSet=soffra-shard-0&authSource=admin";

  mongoose.connect(uri);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected successfully to the server');
    // we're connected!
    var climbDataSchema = mongoose.Schema({
        climbName: String,
        city: String,
        state: String,
        approach: String,
        coordinates: String,
        stravaId: String,
        climbCategory: String,
        terrainDistance: String,
        averageGradient: String,
        maximumGradient: String,
        descentScore: String,
        elevationGain: String,
        startingElevation: String,
        endingElevation: String,
        elevationScaleValue: String,
        regionRange: String,
        fietsScore: String
      });

    var ClimbDataModel = mongoose.model('ClimbDataModel', climbDataSchema);
    var parseXlsx = require('excel');
    parseXlsx('climbList.xlsx', function (err, data) {
      if (err) throw err;
      // data is an array of arrays
      for(var i = 1; i < 538; i++) {
        var row = data[i];
        var climb = {};
        climb.climbName = row[0];
        climb.city = row[1];
        climb.state = row[2]; 
        climb.approach = row[3];
        climb.coordinates = row[4];
        climb.stravaId = row[5];
        climb.climbCategory = row[6];
        climb.terrainDistance = row[7];
        climb.averageGradient = row[8];
        climb.maximumGradient = row[9];
        climb.descentScore = row[10];
        climb.elevationGain = row[11];
        climb.startingElevation = row[12];
        climb.endingElevation = row[13];
        climb.elevationScaleValue = row[14];
        climb.regionRange = row[15];
        climb.fietsScore = row[16];
        
        var result = ClimbDataModel.create(climb);
        result.then(function(climb) {
          console.log(climb);
        }, function(error) {
          console.log(error);
        });
      }
    });
  });

  // MongoClient.connect(uri, function (err, client) {
  //   const collection = client.db("soffra").collection("devices");
  //   assert.equal(null, err);
  //   // perform actions on the collection object
  //   console.log("Connected successfully to server");
  //   client.close();
  // });

};