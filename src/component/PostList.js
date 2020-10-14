import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../action";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    console.log(this.props);
    return <div>hi</div>;
  }
}

const mapStateToProp = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProp, { fetchPost: fetchPost })(PostList);
