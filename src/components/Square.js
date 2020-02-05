import React, { Component } from "react";
import { connect } from "react-redux";

class Square extends Component {
  render() {
    const { color } = this.props;
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color
        }}
      ></div>
    );
  }
}

const mapStateToProps = store => {
  return {
    color: store.color
  };
};

export default connect(mapStateToProps)(Square);
