import React from "react";
import "./historial.css"

class Historial extends React.Component {
  render() {
    return (
      <div class="historial">
        <p>Ultima Seleccion:{this.props.UltimaSeleccion}</p>
        <p>Historial de opciones elegidas: </p>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Historial;