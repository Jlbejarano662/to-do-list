import React from "react";
import "./App.css";
import Container from "./componets/Container";
import FormTodo from "./componets/FormTodo";
import Checkbox from "./componets/Checkbox";
import Tasklist from "./componets/Tasklist";

function App() {
  return (
    <div className="App">
      <Container/>
      <FormTodo/>
      <Checkbox/>
      <Tasklist/>
    </div>
  );
}

export default App;
