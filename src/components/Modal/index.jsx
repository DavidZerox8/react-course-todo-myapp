import React from 'react';
import ReactDOM from 'react-dom'
import { TodoContext } from '../TodoComponents/TodoContext';
import './Modal.css';

function Modal({ children }) {

    const { openModal, setOpenModal } = React.useContext(TodoContext); // Get the setSearchValue and searchValue from the context

    return ReactDOM.createPortal(
        <div className={`modal ${ openModal && "show"}`}>
            <span className='modal-close' onClick={() => setOpenModal(state => !state)}>
                X
            </span>
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };