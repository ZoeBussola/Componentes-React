import React from "react"; 
import "./Botones.css"

class Botones extends React.Component {
  render() {
    return (
      <div class="botones">
        <div class="opcionX">
          <button id="a" class="boton" onClick={this.props.handleSelect}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div class="opcionX">
          <button id="b" class="boton" onClick={this.props.handleSelect}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Botones;
