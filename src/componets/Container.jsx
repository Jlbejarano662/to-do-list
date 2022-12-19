//importamos la librería React y el hook useState de react
import React, { useState } from "react";
//Importamos los componentes de nuestro proyecto
import TaskList from "./Tasklist";
import FormTodo from "./FormTodo";

//Creamos el componente
const Container = () => {
  //FUNCIONALIDAD
  //Utilizamos el hook useState para dar un etado incial vacío a la constante list
  const [list, setList] = useState([]);
  //Añadimos un manejador de eventos que se ejecuta cada vez que se añade una tarea en el formulario
  const handleAddItem = (addItem) => {
    //Añade una tarea a lista de tareas
    setList([...list, addItem]);
  };

  //HTML
  return (
    <div>
      {/*Formulario con el manejador de evento */}
      <FormTodo handleAddItem={handleAddItem} />
      {/*Lista con las tareas*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};
//Exportamos los componentes
export default Container;
