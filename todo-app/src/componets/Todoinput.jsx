import { useState } from "react"

function Todoinput({ addTodo }) {
  const [todo, settodo] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e?.preventDefault?.()
    if (todo.trim() !== "") {
      addTodo(todo)
      settodo("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className={`
        flex items-center gap-2 p-2 rounded-2xl 
        bg-white/[0.07] backdrop-blur-xl
        border transition-all duration-300
        ${isFocused
          ? 'border-purple-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]'
          : 'border-white/10 shadow-lg shadow-black/20'
        }
      `}>
        {/* Input icon */}
        <div className="pl-4 text-purple-400/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        <input
          id="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={todo}
          onChange={e => settodo(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white/90 placeholder-purple-300/30 
                     py-3 px-2 text-base outline-none font-light tracking-wide"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-xl font-semibold text-sm text-white
                     bg-gradient-to-r from-purple-600 to-pink-600
                     hover:from-purple-500 hover:to-pink-500
                     active:scale-95 transition-all duration-200
                     shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
                     disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          disabled={!todo.trim()}
        >
          Add Task
        </button>
      </div>
    </form>
  )
}

export default Todoinput