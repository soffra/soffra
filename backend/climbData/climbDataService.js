module.exports = function (app, ClimbDataModel) {
  function findAllClimbsForState(state) {
    console.log(state);
    ClimbDataModel.findAllClimbsForState(state)
      .then(function (climbs) {
        console.log('CLIMBS: ', climbs);
      }, function (error) {
        console.log('ERROR:', error);
      });
  }
  findAllClimbsForState('MASSACHUSETTS');
};