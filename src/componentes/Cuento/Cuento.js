import React from "react";
import "./Cuento.css"

class Cuento extends React.Component {
  render() {
    return (
        <h1 class="cuento">{this.props.historia}</h1>
    );
  }
}

export default Cuento;