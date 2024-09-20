import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    let message = `Has completado ${ completedTodos } de ${totalTodos} Tareas totales`;
    if (totalTodos === 0) message = 'No hay tareas';
    else if (completedTodos === totalTodos) message = 'Has completado todas las tareas';
    else if (completedTodos === 0) message = 'No has completado ninguna tarea';

    return <h2>{ message }</h2>
}

export { TodoCounter }; // Export the component but not as default export 