//importamos React
import React from "react";
//Importamos los estilos
import "./App.scss";
//Importamos los Componentes
import Container from "./componets/Container";

//Declaramos el componente App
function App() {
  //HTML
  return (
    <div className="App">
      {/* Mostramos el componente Container */}
      <Container/>
    </div>
  );
}

//Exportamos el componente
export default App;
