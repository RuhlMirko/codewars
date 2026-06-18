import { useState } from 'react'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a project', done: false },
  ])

  const addTodo = () => {
    const newTodo = { id: Date.now(), text: 'New task', done: false }
    todos.push(newTodo)
    setTodos(todos)
  }

  const toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id)
    todo.done = !todo.done
    setTodos(todos)
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: '8px', margin: '4px 0', backgroundColor: todo.done ? '#d4edda' : '#f5f5f5', borderRadius: '4px', cursor: 'pointer' }} onClick={() => toggleTodo(todo.id)}>
            {todo.done ? '✓' : '○'} {todo.text}
          </li>
        ))}
      </ul>
      <p>Total: {todos.length} | Done: {todos.filter(t => t.done).length}</p>
    </div>
  )
}

export default function Bug11StateMutation() {
  return (
    <div>
      <h2>Bug 11: Todo List</h2>
      <p style={{ marginBottom: '20px' }}>
        This todo list lets you add items and toggle completion. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <TodoApp />
      </div>
    </div>
  )
}
