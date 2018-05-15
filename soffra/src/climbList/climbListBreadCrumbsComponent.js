import React from 'react';

const ClimbListBreadCrumbs = (props) => {
  return (
    <h3 className="about_heading_mobile">
      <div className="col-lg-12 breadCrumb-container">
        <div className="breadCrumb-inner">
          <a href="earth.php"><div className="breadCrumb-select-statePage breadCrumb-atlas" title="Back to World Atlas">World Atlas</div></a>
          <a href="usa.php"><div className="breadCrumb-select-statePage breadCrumb-country" title="Back to United States">United States</div></a>
          <a href="NVnevada.php">
            <div className="breadCrumb-select-statePage breadCrumb-state" title={props.state}>
              {props.state}
              <div className="breadcrumb_pointer_state"></div>
            </div>
          </a>
        </div>
      </div>    
    </h3 >
    );
}

export default ClimbListBreadCrumbs;
