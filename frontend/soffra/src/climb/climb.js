import React from 'react';

class Climb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      climbs: []
    };
  }

  render() {
    console.log(this.props.match.params.climbName);
    return (
    <div></div>
    )
  }
}

export default Climb;
