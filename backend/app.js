module.exports = function (app) {
    let ClimbDataModel = require('./climbData/climbDataModel')();
    require('./climbData/climbDataService')(app, ClimbDataModel);
};