module.exports = function() {
    let mongoose = require('mongoose');
    
    let ClimbDataSchema = mongoose.Schema({
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

    return ClimbDataSchema;
};