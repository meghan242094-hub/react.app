import React from "react";

function Todoitem({todo, index, deleteTodo}){
    return(
        <div>
            <p>{todo}</p>
            <button onClick={()=>deleteTodo(index)}>delete</button>
        </div>
    )
}
export default Todoitem 