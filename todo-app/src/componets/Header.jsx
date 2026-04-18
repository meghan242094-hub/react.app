function Header({ totalTodos, completedCount }) {
  return (
    <header className="text-center mb-8">
      {/* Glowing title */}
      <div className="relative inline-block">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
          Todo App
        </h1>
        <span className="absolute -top-2 -right-6 text-2xl animate-bounce">✨</span>
      </div>
      <p className="mt-3 text-purple-300/60 text-base font-light tracking-wide">
        Organize your day, one task at a time
      </p>

      {/* Stats badges */}
      {totalTodos > 0 && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            📋 {totalTodos} {totalTodos === 1 ? 'task' : 'tasks'}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
            ✅ {completedCount} done
          </span>
        </div>
      )}
    </header>
  )
}

export default Header