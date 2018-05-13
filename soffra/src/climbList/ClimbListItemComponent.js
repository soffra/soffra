import React from 'react';
import { Link } from 'react-router-dom';

const ClimbListItem = (props) => {

  function getClimbs() {
    let climbs = [];
    for (var i = 0; i < props.climbList.length; i++) {
      let climb = props.climbList[i];
      climbs.push(
        <Link key={climb._id} to={`/climb/${climb.climbName}`}>
          <li className="result">
            <div className="result-title">
              <img src="img/cat1_results.png" />
              {climb.climbName}
            </div>
            <div className="result-desc">
              {climb.city}, {climb.state}
              <div className="statePage_el statePage_el2500">
                {climb.fietsScore}
                <span className="statePage_elFeet">ft.</span>
              </div>
            </div>
          </li>
        </Link>
      );
    }
    return climbs;
  }

  return (
    <div className="col-lg-12">
      {getClimbs()}
    </div>
  );
}

export default ClimbListItem;