/* eslint-disable react/prop-types */
function TodoSearch({defautlTodos, setSearchValue, searchValue, filteredTodos, setFilteredTodos }) 
{    
    filteredTodos = defautlTodos; // Set the filtered todos to the default todos

    return(
        <input 
            value={searchValue}  // Set the value of the input
            onChange={(event) => { // Add an event listener to the input
            //console.log("Se busco la palabra: " + event.target.value); // Log the search value  
            setSearchValue(event.target.value); // Update the search value    
            setFilteredTodos(filteredTodos.filter(todo => { // Update the filtered todos
                return todo.text.toLowerCase().includes(searchValue.toLowerCase()); // Filter the todos that include the search value
            }));      
        }} id="search" name="search" className="input" placeholder="Search task" /> 
    );
}

export { TodoSearch };