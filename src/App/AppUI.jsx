/* eslint-disable react/prop-types */
import { TodoCounter } from '../components/todo/TodoCounter'
import { TodoSearch } from '../components/todo/TodoSearch'
import { TodoList } from '../components/todo/TodoList'
import { TodoItem } from '../components/todo/TodoItem'
import { CreateTodoButton } from '../components/todo/CreateTodoButton'
import { CategoryList } from '../components/todo/CategoryList'
import { CategoryItem } from '../components/todo/CategoryItem'

import './App.css'
import '../assets/css/todo-default.css'

function AppUI({
    categories, 
    selectedCategory, 
    selectedAll, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    todoCompleted, 
    todoDeleted, 
    completedTodos, 
    totalTodos,
    loading,
    error
}) {
  return (
    <>      
      <div className='flex'>
        <div className='card'>
          <h2 className='text-center'>
            Categorías
          </h2>
          <CategoryList>
            <li className="categoryItem" onClick={selectedAll}>
              Todas
            </li>
            {categories.map(category => (
              <CategoryItem key={category.id} text={category.name} selectedCategory={() => selectedCategory(category.id)} />
            ))}
          </CategoryList>         
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
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
          </div>

          <TodoList>

            { loading && <p>Cargando...</p> }
            { error && <p>Ocurrio un error, lo estamos resolviendo</p> }
            { (!loading && !searchedTodos.length === 0) && <p>¡Agrega un nuevo TODO :D!</p> }

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.id}   
                text={todo.text} 
                completed={todo.completed} 
                onCompleted={() => todoCompleted(todo.id)} 
                onDeleted={() => todoDeleted(todo.id)}                
              />
            ))}
          </TodoList>          
        </div>
      </div>
    </>
  );
}

export { AppUI }; 