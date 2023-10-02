import React, { useEffect, useReducer } from 'react';
import { useForm } from '../custom/useForm';
import './todoStyles.css';
import { todoReducer } from './todoReducer';

//Creamos la función init que va utilizar el hook useReducer para inicializar su estado.
const init = () => {
    //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
    // null entonces regresamos un arreglo vacío [].
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {
    //Utilizamos el useReducer.
    //En la desestructuracion, estamos obteniendo el estado del todo con todoState, y el dispatch el cual se
    // va utilizar para poder mandar una acción al reducer y que finalmente va redibujar el componente.
    const [todoState, dispatch] = useReducer(todoReducer, [], init);
    //Utilizamos el useForm que creamos en las prácticas anteriores para poder trabajar con el estado del
    // input text que tenemos en el formulario. En la desestructuracion, el primer elemento también es una
    // desestructuración de 'formValues' que devuelve el custom hook useForm
    const [{ descripcion }, handleInputChange, reset] = useForm({
        //Esta propiedad debe tener el mismo nombre que la propiedad 'name' del tag 'input' de nuestro formulario
        descripcion: ''
    });

    useEffect(() => {
        //Debido a que en localStorage sólo se pueden guardar strings y no objetos, si queremos guarar un
        // JSON debemos convertirlo a string con JSON.stringify
        localStorage.setItem('todos', JSON.stringify(todoState));
    }, [todoState]);
    //Mostramos en la consola del navegador el estado del todo.
    console.log(todoState);
    //Mostramos en la consola del navegador el valor de formValues
    console.log(descripcion);
    //Dispara el evento 'add' hacia el reducer para agregar un nuevo elemento a la lista.
    const handleAddTodo = (e) => {
        //Evitamos el refresh del navegador con la función preventDefault()
        e.preventDefault();
        //Validamos que la descripción tenga información para poderlo agregar a la lista.
        if (descripcion.trim().length === 0) {
            return;
        }
        console.log('Nuevo TODO');
        //Creamos el nuevo TODO
        const nuevoTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }
        //Creamos el action 'add' que se va enviar al reducer
        const action = {
            type: 'add',
            payload: nuevoTodo
        }
        //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
        // enviar la acción al reducer.
        dispatch(action);
        //Reseteamos los valores del formulario.
        reset();
    }

    //Dispara el evento 'delete' hacia el reducer para eliminar un elemento de la lista.
    const handleDeleteTodo = (todoId) => {
        console.log(todoId);
        //Creamos el action 'delete' que se va enviar al reducer. En el payload es suficiente con que enviemos
        // el ID del todo a elminiar ya que en el reducer se utiliza en el filter para descartarlo de la lista.
        const action = {
            type: 'delete',
            payload: todoId
        }
        //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
        // enviar la acción al reducer.
        dispatch(action);
    }
    //Dispara el evento 'complete' hacia el reducer para marcar como completado un elemento de la lista
    const handleCompleteTodo = (todoId) => {
        //Creamos el action 'complete' que se va enviar al reducer. En el payload es suficiente con que enviemos
        // el ID del todo a completar.
        const action = {
            type: 'complete',
            payload: todoId
        }
        //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
        // enviar la acción al reducer.
        dispatch(action);
    }
    return (
        <>
            <h1>Todo App ({todoState.length})</h1>
            <hr />
            {
                //Creamos la lista de TODOs
            }
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todoState.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p
                                        className={`${todo.done && 'complete'}`}
                                        onClick={() => handleCompleteTodo(todo.id)}
                                    >
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteTodo(todo.id)}
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    Agregar TODO
                    <hr />
                    <form onSubmit={handleAddTodo}>
                        {
                            //En este input text estamos igualando value a la variable 'descripcion' que
                            // obtuvimos al utilizar el custom hook useForm
                        }
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Indica el TODO..."
                            autoComplete="off"
                            value={descripcion}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
