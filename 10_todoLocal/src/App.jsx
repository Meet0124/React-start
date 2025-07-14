import { useState } from 'react'
import { TodoProvider } from "./contexts";
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prev) => [ {id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo: prevTodo)))
  }
  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((todo) => todo.id !== di ))
  }
  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      
    </TodoProvider>
  )
}

export default App
