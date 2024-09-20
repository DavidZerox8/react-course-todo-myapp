import React from 'react';

function useLocalStorage(itemName, initialValue) {  

    let storedItem = localStorage.getItem(itemName);
    let parsedItems;

    if (!storedItem) { 
        parsedItems = initialValue;
        localStorage.setItem(itemName, JSON.stringify(parsedItems)); 
    } else {
        parsedItems = JSON.parse(storedItem);  
    }  

    const [item, setItem] = React.useState((parsedItems));

    const saveItem = (newItem) => {
        const stringItem = JSON.stringify(newItem); // Convert the new todos to a string
        localStorage.setItem(itemName, stringItem); // Save the new todos in the local storage
        setItem(newItem); // Update the todos state
    };

    return [
        item,
        saveItem
    ];
}
  
export { useLocalStorage }
