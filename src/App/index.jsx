import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { AppUI } from './AppUI'

const categories = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'School' },
  { id: 3, name: 'Work' }
];

const defautlTodos = [
  { category_id: 1, id: 1, text: 'Cortar cebolla', completed: true },
  { category_id: 1, id: 2, text: 'Tomar el curso de intro a React', completed: false },
  { category_id: 1, id: 3, text: 'Llorar con la llorona', completed: false },
  { category_id: 2, id: 4, text: 'Hacer la comida', completed: false },
  { category_id: 2, id: 5, text: 'Hacer la cama', completed: false },
  { category_id: 2, id: 6, text: 'Hacer la tarea ciencias', completed: false },
  { category_id: 3, id: 7, text: 'Hacer la tarea biologia', completed: true },
  { category_id: 3, id: 8, text: 'Hacer la tarea informatica', completed: false },
  { category_id: 3, id: 9, text: 'Hacer la tarea español', completed: false }
];

// localStorage.setItem('tasks_v1', JSON.stringify(defautlTodos));
//localStorage.removeItem('tasks_v1');

function App() {    
  
  const [todos, saveTodos]            = useLocalStorage('tasks_v1', defautlTodos); // Create a state to store the todos, and a function to update it | The initial value is the default todos
  const [searchValue, setSearchValue] = React.useState(''); // Create a state to store the search value, and a function to update it | The initial value is an empty string  

  //Derived state | Estado derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length; // Filter the todos that are completed and get the length of the array | The !! is used to convert the value to a boolean
  const totalTodos     = todos.length; // Get the length of the todos array


  console.log('todos 1');

  // React.useEffect(() => {
  //   console.log('todos ---- 2');
  // });

  React.useEffect(() => { // The useEffect will run when the component is mounted only once
    console.log('todos ---- 2');
  }, [totalTodos]); // The useEffect will only run when the totalTodos value changes

  console.log('todos 3');

  const searchedTodos  = todos.filter(todo => {
    const textTodo   = todo.text.toLowerCase(); // Convert the text of the todo to lowercase
    const searchText = searchValue.toLowerCase(); // Convert the search value to lowercase
    
    return textTodo.includes(searchText); // Return the todos that include the search value
  }); // Filter the todos that include the search value

  const todoCompleted = (todoID) => {
    const newsTodos = [...todos]; // Copy the todos array
    const todoIndex = newsTodos.findIndex(todo => todo.id === todoID); // Find the index of the todo to update
    newsTodos[todoIndex].completed = !newsTodos[todoIndex].completed; // Update the completed value of the todo
    localStorage.setItem('tasks_v1', JSON.stringify(newsTodos));
    saveTodos(newsTodos); // Update the todos state
  };

  const todoDeleted = (todoID) => {
    const newsTodos = [...todos]; // Copy the todos array
    const todoIndex = newsTodos.findIndex(todo => todo.id === todoID); // Find the index of the todo to delete
    // newsTodos[todoIndex].deleted = true; // Update the deleted value of the todo
    newsTodos.splice(todoIndex, 1); // Delete the todo | The second parameter is the number of elements to delete    
    localStorage.setItem('tasks_v1', JSON.stringify(newsTodos));
    saveTodos(newsTodos); // Update the todos state
  };  

  // eslint-disable-next-line no-unused-vars
  const selectedCategory = (categoryID) => {
    // Filter the todos that have the category id
    // const newTodos = parsedTodos.filter(todo => todo.category_id === categoryID);
    // setTodos(newTodos); // Update the todos state
  };

  const selectedAll = () => {
    // const newsTodos = [...parsedTodos]; // Copy the todos array
    // setTodos(newsTodos); // Update the todos state
  };

  return (
    <AppUI 
    categories={ categories }
    selectedCategory={ selectedCategory }
    selectedAll={ selectedAll}
    searchValue={ searchValue }
    setSearchValue={ setSearchValue }
    searchedTodos={ searchedTodos }
    todoCompleted={ todoCompleted }
    todoDeleted={ todoDeleted }
    completedTodos={ completedTodos }
    totalTodos={ totalTodos }
    />
  )
}

export default App
