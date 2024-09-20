/* eslint-disable react/prop-types */
function TodoSearch({ setSearchValue, searchValue }) 
{    
    return(
        <input 
            value={searchValue}  // Set the value of the input
            onChange={(event) => { // Add an event listener to the input            
            setSearchValue(event.target.value); // Update the search value          
        }} id="search" name="search" className="input" placeholder="Search task" /> 
    );
}

export { TodoSearch };