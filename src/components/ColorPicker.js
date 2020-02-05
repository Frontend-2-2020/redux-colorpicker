import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { colorChange } from "../redux/actions/colorActions";

class ColorPicker extends Component {
  handleUpdate = () => {
    const color = document.getElementById("color").value;
    this.props.setColor(color);
  };

  render() {
    const { color } = this.props;
    return (
      <div style={{ backgroundImage: "url(../iuhiu.jpg)" }}>
        <input type="color" name="color" id="color" defaultValue={color} />
        <button onClick={this.handleUpdate}>update</button>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired
};

const mapStateToProps = store => {
  return {
    color: store.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: color => dispatch(colorChange(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
