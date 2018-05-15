import React from 'react';
import ClimbListTitle from './climbListTitleComponent';
import ClimbListBreadCrumbs from './climbListBreadCrumbsComponent';
import ClimbListItem from './ClimbListItemComponent';
import Footer from '../reusableComponents/footerComponent';
import Header from '../reusableComponents/headerComponent';

class ClimbList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      climbs: []
    };
  }

  componentDidMount() {
    this.fetchClimbList();
  }

  fetchClimbList() {
    return fetch('https://soffra-climb.herokuapp.com/climbList')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          climbs: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let climbState = this.props.match.params.state;
    
    return (
      <div>
        <Header />
        <div className="container state_container">
          <div className="row">
            <div className="col-lg-12">
              <ClimbListTitle state={climbState} />
              <ClimbListBreadCrumbs state={climbState} />
              <ClimbListItem climbList={this.state.climbs} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ClimbList;
