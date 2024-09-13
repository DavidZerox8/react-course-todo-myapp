/* eslint-disable react/prop-types */
function TodoList({ children }) 
{
    return(
        <ul>
            {children}
        </ul>
    );
}

export { TodoList };