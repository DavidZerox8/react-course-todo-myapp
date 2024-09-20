import React from 'react'

import { TodoCounter } from '../components/TodoComponents/TodoCounter'
import { TodoSearch } from '../components/TodoComponents/TodoSearch'
import { TodoList } from '../components/TodoComponents/TodoList'
import { TodoItem } from '../components/TodoComponents/TodoItem'
import { CreateTodoButton } from '../components/TodoComponents/CreateTodoButton'
import { CategoryList } from '../components/TodoComponents/CategoryList'
import { CategoryItem } from '../components/TodoComponents/CategoryItem'
import { TodoLoading } from '../components/TodoComponents/TodoLoading'
import { TodoError } from '../components/TodoComponents/TodoError'
import { EmptyTodo } from '../components/TodoComponents/EmptyTodo'
import { TodoContext } from '../components/TodoComponents/TodoContext'

import './App.css'
import '../assets/css/todo-default.css'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoComponents/TodoForm'

function AppUI() {

  const {
    openModal,
    categories, 
    categorySearch,
    setCategorySearch,                            
    searchedTodos, 
    todoCompleted, 
    todoDeleted,                         
    loading,
    error } = React.useContext(TodoContext);

  return (
    <>      
      <div className='flex'>
        <div className='card'>
          <h2 className='text-center'>
            Categorías
          </h2>
          <CategoryList>
            <li className="categoryItem" onClick={() => {
              setCategorySearch(null);
            }}>
              Todas
            </li>
            {categories.map(category => (
              <CategoryItem key={category.id} id={category.id} text={category.name} categorySearch={categorySearch} setCategorySearch={setCategorySearch} />
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
            { openModal && (
                <Modal> 
                  <TodoForm />
                </Modal>
            )}
          </div>
          <div className='flex align-center'>
            <div>
              <TodoCounter />
            </div>
            <div>
              <TodoSearch />
            </div>
          </div>

          <TodoList>

            { loading && <TodoLoading></TodoLoading> }
            { error && <TodoError></TodoError> }
            { (!loading && searchedTodos.length === 0) && <EmptyTodo></EmptyTodo> }

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