import { useState } from 'react'

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
]

export default function Bug4UserSort() {
  const [sortAscending, setSortAscending] = useState(true)

  const sortedUsers = [...users].sort((a, b) => {
    if (sortAscending) {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })

  return (
    <div>
      <h2>Bug 4: User List Sorting</h2>
      <p style={{ marginBottom: '20px' }}>
        This component sorts users alphabetically. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <button onClick={() => setSortAscending(!sortAscending)} style={{ marginBottom: '10px' }}>
          Sort: {sortAscending ? 'A-Z' : 'Z-A'}
        </button>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sortedUsers.map((user, index) => (
            <li key={user.id} style={{ padding: '10px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <strong>{user.name}</strong> ({user.age})
              <span style={{ marginLeft: '10px' }}>#{index + 1}</span>
            </li>
          ))}
        </ul>
        <p>Total: {sortedUsers.length} users</p>
      </div>
    </div>
  )
}
