import { TodoProvider } from '../components/TodoComponents/TodoContext'
import { AppUI } from './AppUI'

function App() {    
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
