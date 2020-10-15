import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../action";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        <div className="header">{this.props.user.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps is a props which we will be sending to the component
  // by using ownprops we can extract out the logic to mapStateToProps
  return {
    user: state.users.find((user) => {
      return user.id === ownProps.userId;
    }),
  };
};

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
