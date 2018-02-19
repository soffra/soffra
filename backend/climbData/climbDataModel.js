module.exports = function () {
    // let model = null;
    let mongoose = require('mongoose');
    mongoose.Promise = require('q').Promise;
    let ClimbDataSchema = require('./climbDataSchema')();
    let ClimbDataModel = mongoose.model('ClimbDataModel', ClimbDataSchema);

    let api = {
        "findAllClimbsForState": findAllClimbsForState
    };

    return api;

    function findAllClimbsForState (state) {
        return ClimbDataModel.find({state: state});
        // console.log('hello')
    }
}