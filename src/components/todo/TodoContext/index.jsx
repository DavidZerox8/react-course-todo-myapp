/* eslint-disable react/prop-types */
import React from 'react';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({ children }) {

    const categories = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'School' },
        { id: 3, name: 'Work' }
    ];

    const { item: todos, saveItem: saveTodos , error, loading } = useLocalStorage('tasks_v1', []); // Create a state to store the todos, and a function to update it | The initial value is the default todos
    const [ searchValue, setSearchValue ] = React.useState(''); // Create a state to store the search value, and a function to update it | The initial value is an empty string  
    const [ categorySearch, setCategorySearch ] = React.useState(null); // Create a state to store the category search value, and a function to update it | The initial value is an empty string

    //Derived state | Estado derivados
    const completedTodos = todos.filter(todo => !!todo.completed).length; // Filter the todos that are completed and get the length of the array | The !! is used to convert the value to a boolean
    const totalTodos     = todos.length; // Get the length of the todos array

    const searchedTodos  = todos.filter(todo => {
        const textTodo   = todo.text.toLowerCase(); // Convert the text of the todo to lowercase
        const searchText = searchValue.toLowerCase(); // Convert the search value to lowercase

        let res;
        categorySearch ? res = textTodo.includes(searchText) && todo.category_id === categorySearch : res = textTodo.includes(searchText);
            
        return res; // Return the todos that include the search value
    }); // Filter the todos that include the search value

    const todoCompleted = (todoID) => {
        const newsTodos = [...todos]; // Copy the todos array
        const todoIndex = newsTodos.findIndex(todo => todo.id === todoID); // Find the index of the todo to update
        newsTodos[todoIndex].completed = !newsTodos[todoIndex].completed; // Update the completed value of the todo    
        saveTodos(newsTodos); // Update the todos state
    };

    const todoDeleted = (todoID) => {
        const newsTodos = [...todos]; // Copy the todos array
        const todoIndex = newsTodos.findIndex(todo => todo.id === todoID); // Find the index of the todo to delete
        newsTodos.splice(todoIndex, 1); // Delete the todo | The second parameter is the number of elements to delete        
        saveTodos(newsTodos); // Update the todos state
    };  

    return (
        <TodoContext.Provider value={{
            categories, 
            categorySearch,
            setCategorySearch,    
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            todoCompleted, 
            todoDeleted, 
            completedTodos, 
            totalTodos,
            loading,
            error
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };