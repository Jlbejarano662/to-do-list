import React, { useState } from "react";

const FormTodo = (props) => {
  //FUNCIONALIDAD
  const { handleAddItem } = props; // constante que tiene el valor del props
  const [description, setDescription] = useState(""); //constante para manejar el estado, se inicia vacío
  const handleSubmit = (e) => {
    //creamos el evento handleSubmit
    e.preventDefault(); // Evita que la página se refresque
    //a la constante handleAddItem, le añadimos los siguientes atributos
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription(""); // dejamos la descripicón con un estdo vacío nuevamente
  };
  //HTML
  return (
    //creamos un form con que al dar click en el botón ejecute el evento handleSubmit
    <form onSubmit={handleSubmit}>
      {/*Dentro del formulario creamos un div que contiene todo*/}
      <div className="todo-list">
        {/*Creamos un div que contiene el input y el botón*/}
        <div className="file-input">
          {/* Creamos un input*/}
          <input
            //input de tipo texto
            type="text"
            //input con clase texto
            className="text"
            //input con un valor igual a la descripción
            value={description}
            //Cuando el valor del input cambio, actualiamos la descripción en el evento handleSubmit
            onChange={(e) => setDescription(e.target.value)}
          />
          {/*Creamos un botón*/}
          <button
            //Botón con clase "button pink"
            className="button pink"
            //Botón deshabilitado si no hay datos en el input
            disabled={description ? "" : "disabled"}
          >
            {/*Añadimos los datos del input a Tasklist*/}
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
//Exportamos el componente
export default FormTodo;
