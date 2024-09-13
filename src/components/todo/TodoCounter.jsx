/* eslint-disable react/prop-types */
function TodoCounter({ totalTodos, completedTodos }) 
{
    return <h2>Has completado { completedTodos } de {totalTodos} Tareas</h2>
}

export { TodoCounter }; // Export the component but not as default export 