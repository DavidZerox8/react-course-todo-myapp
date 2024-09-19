import { FaPlus } from "react-icons/fa";



function CreateTodoButton() {
    return(
        <button onClick={
            (event) => {
                console.log("Click en el boton de añadir");
                console.log(event);
                console.log(event.target);
                alert('Click en el botón de añadir');
            }
        } className="btn-alt btn-add-todo">
            <FaPlus />        
        </button>
    );
}

export { CreateTodoButton }