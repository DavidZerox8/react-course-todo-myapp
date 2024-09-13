import { TodoCounter } from './components/todo/TodoCounter'
import { TodoSearch } from './components/todo/TodoSearch'
import { TodoList } from './components/todo/TodoList'
import { TodoItem } from './components/todo/TodoItem'
import { CreateTodoButton } from './components/todo/CreateTodoButton'
import './App.css'

function App() {  

  return (
    <>      
      <TodoCounter completedTodos={5} totalTodos={20} /> {/* Pass the props to the component */}      
      <TodoSearch />

      <TodoList>
        <TodoItem /> {/* Add the component as a props.children of the TodoList component */}
        <TodoItem />
        <TodoItem />
      </TodoList>   

      <CreateTodoButton />   
    </>
  )
}

export default App
