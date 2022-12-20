import { useState } from "react";
import { useReducer } from "react";
import Tarjeta from "./componentes/Tarjeta"

import "./index.css";

// CONSIGNAS EN APP:
// 1- Implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- Desarrollar los métodos que me permitan asignarle valor correspondiente a esas variables.
// 3- Incorporar el componete Tarjeta en 🚩

// ESTADO: App tiene dos estados, uno para manejar el tema Claro/Oscuro, y otro para guardar como texto la Plataforma favorita.
// MÉTODOS: App tiene dos métodos, uno para cambiar el color del tema y otro para setear la plataforma favorita.
// PROPS: App no tiene props.

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { theme: state.theme === "light" ? "dark" : "light" };

    default:
      throw new Error();
  }
};


function App() {
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [favorita, setFavorita] = useState("");


  const handleFavorita = () => {
    setFavorita (Tarjeta)
  };

  return (
    <div className="App" id={theme.theme}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      { favorita !== "" ? (<h4 className={ favorita === "Twitter" ? "tw" : favorita === "Facebook" ? "fb" : "yt" }> {favorita}</h4>) : ("")}

      {/* 🚩 Implementar acá */}
      <Tarjeta handleFavorita/>

      <button classsname="" onClick={()=>dispatch({type:"theme"})}>Change theme</button>
    </div>
  );
}


export default App;
