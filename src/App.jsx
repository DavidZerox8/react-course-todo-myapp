import { TodoCounter } from './components/todo/TodoCounter'
import { TodoSearch } from './components/todo/TodoSearch'
import { TodoList } from './components/todo/TodoList'
import { TodoItem } from './components/todo/TodoItem'
import { CreateTodoButton } from './components/todo/CreateTodoButton'
import React from 'react'
import './App.css'
import './assets/css/todo-default.css'

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

function App() {  

  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = React.useState(defautlTodos); // Create a state to store the todos, and a function to update it | The initial value is the default todos
  const [searchValue, setSearchValue] = React.useState(''); // Create a state to store the search value, and a function to update it | The initial value is an empty string  

  //Derived state | Estado derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length; // Filter the todos that are completed and get the length of the array | The !! is used to convert the value to a boolean
  const totalTodos     = todos.length; // Get the length of the todos array

  const [filteredTodos, setFilteredTodos] = React.useState(todos); // Create a state to store the filtered todos, and a function to update it | The initial value is the todos array

  return (
    <>      
      <div className='flex'>
        <div className='card'>
          <h2 className='text-center'>
            Categorías
          </h2>
          <ul className='categoriesList'>
            {categories.map(category => (
              <li className='categoryItem' key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>         
          <button className="btn">
            Crear nueva categoría
          </button>
        </div>
        <div className='flex-1'>
          <div className='flex align-center'>
            <h1>
              Mis tareas
            </h1>
            <CreateTodoButton />
          </div>
          <div className='flex align-center'>
            <div>
              <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} /> {/* Pass the props to the component */}                      
            </div>
            <div>
              <TodoSearch defautlTodos={defautlTodos} searchValue={searchValue} setSearchValue={setSearchValue} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
            </div>
          </div>

          <TodoList>
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>          
        </div>
      </div>
    </>
  )
}

export default App
