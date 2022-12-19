//Importamos librerías
import React from "react";
//Impotamos el componente checkbox
import Checkbox from "./Checkbox";

//declaramos el componente
const TaskList = (props) => {
  // FUNCIONALIDAD
  const { list, setList } = props;// constante que tiene el valor de las propiedades de la lista de tareas y el método setList

  //Creamos un  método onChangeStatus para el manejador onChange,
  const onChangeStatus = (e) => {
    const { name, checked } = e.target; //creamos la contante name y le asignamos la referencia del objeto que lanzo el evento

    // creamos la función updateList que recorre la lista
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,//actualiza el valor del checkbox 
    }));
    setList(updateList); //retorna la lista actualizada
  };

  //Creamos un manejador de evento onclick para el botón Delete all done
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done); //ekimina todas las tereas que están echas
    setList(updateList); //actualiza la lista
  };

  //Método que mapea la lista de tareas
  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} /> //añade un checkbox por cada item de la lista
  ));

  //HTML
  return (
    <div className="todo-list">
      {/*Si la lista está vacía muestra el mensaje No Task, de lo contrario muestra la lista*/}
      {list.length ? chk : "No tasks"}
      {/*Si la lista no está vacía muestra el botón*/}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};
//Exportamos el componente
export default TaskList;
