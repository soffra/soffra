module.exports = function (app, ClimbDataModel) {

  app.get('/climbList', findAllClimbsForState);

  function findAllClimbsForState(req, res) {
    ClimbDataModel.findAllClimbsForState('MASSACHUSETTS')
      .then(climbs => {
        if(climbs != []) {
          res.json(climbs);
        }
      })
      .catch(error => {
        res.send(error);
      });
  }
};