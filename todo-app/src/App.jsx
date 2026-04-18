import {useState} from "react"
import Header from "./componets/Header"
import Todoinput from "./componets/Todoinput"
import Todolist from "./componets/Todolist" 

function App(){
  const [todos,setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos([...todos,todo])
  }

  const handleDeleteTodo = (index) => {
    const newTodo   = todos.filter((_,i) => i !== index)
    setTodos(newTodo)
  } 
  
  return(
    <>
    <Header />
    <Todoinput addTodo={handleAddTodo} />
    <Todolist todos={todos} deleteTodo={handleDeleteTodo}  />
    </>
  )
}

export default App