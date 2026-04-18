import { useState } from "react"

function Todoitem({ todo, deleteTodo, toggleTodo }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        group flex items-center gap-4 p-4 rounded-xl
        backdrop-blur-sm border transition-all duration-300 cursor-pointer
        ${todo.completed
          ? 'bg-green-500/[0.06] border-green-500/20'
          : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.08] hover:border-purple-500/30'
        }
        ${isHovered ? 'shadow-lg shadow-black/20 -translate-y-0.5' : 'shadow-md shadow-black/10'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`
          flex-shrink-0 w-6 h-6 rounded-full border-2 
          flex items-center justify-center transition-all duration-300
          ${todo.completed
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 scale-110'
            : 'border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10'
          }
        `}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Todo text */}
      <p className={`
        flex-1 text-base transition-all duration-300
        ${todo.completed
          ? 'line-through text-white/30 font-light'
          : 'text-white/80 font-normal'
        }
      `}>
        {todo.text}
      </p>

      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteTodo(todo.id)
        }}
        className="opacity-0 group-hover:opacity-100 flex-shrink-0 p-2 rounded-lg
                   text-red-400/60 hover:text-red-400 hover:bg-red-500/10
                   transition-all duration-200 active:scale-90"
        aria-label="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default Todoitem