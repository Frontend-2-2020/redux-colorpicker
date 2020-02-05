import React, { Component } from "react";
import ColorPicker from "./components/ColorPicker";
import Square from "./components/Square";
import LoginBtn from "./components/LoginBtn";

class App extends Component {
  render() {
    return (
      <div>
        <LoginBtn />
        <ColorPicker />
        <Square />
      </div>
    );
  }
}

export default App;
