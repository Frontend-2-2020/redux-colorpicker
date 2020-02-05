import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { colorChange } from "../redux/actions/colorActions";

class LoginBtn extends Component {
  handleLogin = () => {
    this.props.login();
    this.props.setColor("#00FF00");
  };
  render() {
    const { isLoggedIn, logout } = this.props;

    if (isLoggedIn) {
      return <button onClick={logout}>Logout</button>;
    } else {
      return <button onClick={this.handleLogin}>Login</button>;
    }
  }
}

LoginBtn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch({ type: "LOGIN" }),
    logout: () => dispatch({ type: "LOGOUT" }),
    setColor: color => dispatch(colorChange(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
