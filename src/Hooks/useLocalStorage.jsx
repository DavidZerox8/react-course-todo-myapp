import React from 'react';

function useLocalStorage(itemName, initialValue) {  

    //// eslint-disable-next-line no-unused-vars
    // const defautlTodos = [
    //   { category_id: 1, id: 1, text: 'Cortar cebolla', completed: true },
    //   { category_id: 1, id: 2, text: 'Tomar el curso de intro a React', completed: false },
    //   { category_id: 1, id: 3, text: 'Llorar con la llorona', completed: false },
    //   { category_id: 2, id: 4, text: 'Hacer la comida', completed: false },
    //   { category_id: 2, id: 5, text: 'Hacer la cama', completed: false },
    //   { category_id: 2, id: 6, text: 'Hacer la tarea ciencias', completed: false },
    //   { category_id: 3, id: 7, text: 'Hacer la tarea biologia', completed: true },
    //   { category_id: 3, id: 8, text: 'Hacer la tarea informatica', completed: false },
    //   { category_id: 3, id: 9, text: 'Hacer la tarea español', completed: false }
    // ];

    //localStorage.setItem('tasks_v1', JSON.stringify(defautlTodos));
    //localStorage.removeItem('tasks_v1');

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
        }, 1500);
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
