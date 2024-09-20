import React from 'react';

function useLocalStorage(itemName, initialValue) {  

    const [item, setItem]       = React.useState(initialValue);    
    const [error, setError]     = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {        
        setTimeout(() => {
            try {
            
                let storedItem = localStorage.getItem(itemName);
                let parsedItems;
    
                if (!storedItem) { 
                    parsedItems = initialValue;
                    localStorage.setItem(itemName, JSON.stringify(parsedItems)); 
                } else {
                    parsedItems = JSON.parse(storedItem);
                    setItem(parsedItems);
                }
    
                setLoading(false);
    
            } catch (error) {
    
                console.error(error);
    
                setLoading(false);
                setError(true);
    
            }
        }, 1000);
    }, [itemName, initialValue]);      

    const saveItem = (newItem) => {
        const stringItem = JSON.stringify(newItem); // Convert the new todos to a string
        localStorage.setItem(itemName, stringItem); // Save the new todos in the local storage
        setItem(newItem); // Update the todos state
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}
  
export { useLocalStorage }
