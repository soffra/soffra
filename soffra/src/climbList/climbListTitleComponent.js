import React from 'react';

const ClimbListTitle = (props) => {
  return (
    <h1 className="page-header statepage_headline">
      <div className="nevada_state state_icon_state"></div>
      <div className="statePage_preHeading">The State Of</div>
      {props.state}, USA
        <div className="country-headline-statePage">UNITED STATES</div>
      <div className="nat_flags usa_flag-statePage"></div>
    </h1>
  );
}

export default ClimbListTitle;
