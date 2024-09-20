import { TodoProvider } from '../components/todo/TodoContext'
import { AppUI } from './AppUI'

function App() {    
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
