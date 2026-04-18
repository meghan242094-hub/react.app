import React from "react";

import Todoitem from "./Todoitem";

function Todolist({todos, deleteTodo}){
    return(
        <div>
            {todos.map((todo, index)=>(
                <Todoitem key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
export default Todolist 