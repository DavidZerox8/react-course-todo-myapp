import React from 'react';
import { FaPlus } from "react-icons/fa";
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

    const { setOpenModal } = React.useContext(TodoContext); // Get the setSearchValue and searchValue from the context

    return(
        <button onClick={
            (event) => {
                event.preventDefault();
                setOpenModal(state => !state);
            }
        } className="btn-alt btn-add-todo">
            <FaPlus />        
        </button>
    );
}

export { CreateTodoButton }