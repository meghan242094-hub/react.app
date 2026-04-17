import { useState } from "react"    

function Todoinput({addTodo}){
    const [todo,settodo] = useState("")   
    
        const handleChange = () => {
            if (todo.trim() !== ""){
                addTodo(todo)
                settodo("")
            }
        }
    return(
        <div>
        <input type="text" placeholder="Enter your todo" 
        value={todo}
        onChange={e=>settodo(e.target.value)}
        />
        <button onClick={handleChange}>BTN</button>
        </div>
    )
}
export default Todoinput    