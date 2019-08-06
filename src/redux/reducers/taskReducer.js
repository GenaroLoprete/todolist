//recibe el estado actual que vos tenes y segun la accion, hace la modificacion necesarias
//Siempre que se realiza una accion, se disparan todos los reducers, por eso siempre siempre siempre
//tenemos un default y retornamos el state
//react funciona muy bien cuando le asignamos algo nuevo entero a modificar lo que ya tenemos
//es mas eficiente porque si modificamos lo que tiene, entra a cada elemento para fijarse que es lo que cambio

export default function taskReducers(state = [], action) {
  //puede ser que cuando llamemos al reducer, el estado no este inicializado, por eso por convencion podemos poner un valor por defecto
  switch (action.type) {
    case "CREATE_TASK":
      const id = state.length + 1;
      return [...state, { ...action.task, id, completed: false }]; //asi clonamos un vector mas facil
    case "DELETE_TASK":
      return state.filter(t => t.id !== action.id); //Filter crea un array nuevo sin el elemento que tenga este id
    default:
      //siempre siempre tener un default, retornamos el mismo estado que recibimos ya que no podemos manipular
      return state;
  }
}

//Es buena practica tener un archivo con constantes que tengan el nombre de los action.type y exportarlo desde aca
