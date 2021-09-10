import info from "./data.json";
import React from "react";
import Cuento from "./componentes/Cuento/Cuento"
import Botones from "./componentes/Botones/Botones";
import Historial from "./componentes/historial/Historial";
import "./App.css"

class App extends React.Component {

  state ={
    contador : 1,
    historial: [],
    UltimaSeleccion: "",
  }

handleSelect = (e) => {
  const id = e.target.id;
  if (this.state.contador >= 5) {
    alert("Se Termino El Recorrido");
  }
  else if (id === "a") {
    this.setState((prev) => ({
      contador: this.state.contador + 1,
      UltimaSeleccion: id,
      historial: [...prev.historial, id],
    }));
  }else if (id === "b") {
      this.setState((prev) => ({
        contador: this.state.contador + 1,
        UltimaSeleccion: id,
        historial: [...prev.historial, id],
      }));
    }
}
componentDidMount(){
  console.log("Se Monto El Componente");
}
componentDidUpdate(){
  console.log("Se Actualizo El Componente");
}

  render() {
    return (
      <div className="contenido">
        <Cuento
          historia={info.find(idH => idH.id === `${this.state.contador+this.state.UltimaSeleccion}`).historia}

/>

        <Botones
          handleSelect={this.handleSelect}
          opcionA={info.find(idH => idH.id === `${this.state.contador+this.state.UltimaSeleccion}`).opciones.a}
          opcionB={info.find(idH => idH.id === `${this.state.contador+this.state.UltimaSeleccion}`).opciones.b}
        />
        <Historial
          UltimaSeleccion={this.state.UltimaSeleccion !== "" ?  " Opcion " + this.state.UltimaSeleccion.toUpperCase() : ""}
          historial={this.state.historial.map((id, index) => (
              <li key={index}>Vuelta {index+1} - Opcion {id.toUpperCase()}</li> ))}
        />
      </div>
    );
  }
}

export default App;
