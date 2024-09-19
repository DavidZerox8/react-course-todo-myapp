import React from 'react';

function TodoSearch() 
{
    const [searchValue, setSearchValue] = React.useState(''); // Create a state to store the search value, and a function to update it | The initial value is an empty string

    console.log("El usuario busco: " + searchValue); // Log the search value | This will be executed every time the component is rendered | Thc console log can be shown twice because the strict mode of React is enabled by default

    return(
        <input 
            value={searchValue}  // Set the value of the input
            onChange={(event) => { // Add an event listener to the input
            //console.log("Se busco la palabra: " + event.target.value); // Log the search value  
            setSearchValue(event.target.value); // Update the search value          
        }} id="search" name="search" className="input" placeholder="Search task" /> 
    );
}

export { TodoSearch };