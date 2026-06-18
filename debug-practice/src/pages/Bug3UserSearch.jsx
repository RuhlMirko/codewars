import { useState } from 'react'

const users = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' },
]

export default function Bug3UserSearch() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Bug 3: User Search Filter</h2>
      <p style={{ marginBottom: '20px' }}>
        This component filters users by name. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '250px', marginBottom: '10px', display: 'block' }}
        />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map(user => (
            <li key={user.id} style={{ padding: '10px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <strong>{user.name}</strong> ({user.age})
              <br />
              <small>{user.email}</small>
            </li>
          ))}
        </ul>
        <p>Total: {filteredUsers.length} users</p>
      </div>
    </div>
  )
}
