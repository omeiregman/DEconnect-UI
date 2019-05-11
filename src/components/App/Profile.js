import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../CraftersComponent/DEconnectHeader";
import ProfileTab from "../ProfileTab";
import InterestTab from '../InterestsTab'
import ProfessionalMatches from "../ProfessionalMatches";

class Profile extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ProfileTab user={auth.user} />
              <InterestTab user={auth.user} />
            </div>
            <div className="col-md-4">
              <ProfessionalMatches />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStatetoProps = state => {
  console.log(state);
  return {
    auth: state.auth
  };
};

export default connect(mapStatetoProps)(Profile);
