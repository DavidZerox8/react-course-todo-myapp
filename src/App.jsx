import { TodoCounter } from './components/todo/TodoCounter'
import { TodoSearch } from './components/todo/TodoSearch'
import { TodoList } from './components/todo/TodoList'
import { TodoItem } from './components/todo/TodoItem'
import { CreateTodoButton } from './components/todo/CreateTodoButton'
import './App.css'

function App() {  

  return (
    <>      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>   

      <CreateTodoButton />   
    </>
  )
}

export default App
