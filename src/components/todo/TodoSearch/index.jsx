/* eslint-disable react/prop-types */

import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {    

    const { setSearchValue, searchValue } = React.useContext(TodoContext); // Get the setSearchValue and searchValue from the context

    return(
        <input 
            value={searchValue}  // Set the value of the input
            onChange={(event) => { // Add an event listener to the input            
            setSearchValue(event.target.value); // Update the search value          
        }} id="search" name="search" className="input" placeholder="Search task" /> 
    );
}

export { TodoSearch };