
import React from 'react';
import { TodoContext } from '../TodoContext';

import './todo-form.css';

function TodoForm() {

    const { categories, setOpenModal, addTodo }   = React.useContext(TodoContext);
    const [ newTodoText, setNewTodoText ]         = React.useState('');
    const [ newTodoCategory, setNewTodoCategory ] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoCategory, newTodoText);
        setOpenModal(state => !state);
    };

    const onCancel = () => {
        setOpenModal(state => !state);
    };

    const onChangeCategory = (event) => {
        setNewTodoCategory(event.target.value);
        console.log(newTodoCategory);
    };

    const onChangeText = (event) => {
        setNewTodoText(event.target.value);
        console.log(newTodoText);
    };

    return (
        <form onSubmit={onSubmit}>     
            <span className='form-title'>
                Agrega una nueva tarea
            </span>    
            <label htmlFor="newTodoCategory">
                Selecciona una categoría
            </label>   
            <select id="newTodoCategory" onChange={onChangeCategory}>
                <option value={newTodoCategory}>-- Selecciona una opción --</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <label htmlFor="newTodoText">
                Describe la tarea
            </label>
            <textarea onChange={onChangeText}
                rows={5}
                id="newTodoText"                
                placeholder="Ex. Comprar leche"
                value={newTodoText}></textarea>
            <div className="flex">
                <button onClickCapture={onCancel} className="form-button button-danger" type="button">Cerrar</button>
                <button className="form-button button-success" type="submit">Añadir</button> 
            </div>           
        </form>
    );
}

export { TodoForm };