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
      <h2>Bug 3: User Search Filter (Red Herring)</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Verdict:</strong> This is actually a <strong>confidence check</strong> - there is no bug here.
        The filter logic <code>user.name.toLowerCase().includes(searchTerm.toLowerCase())</code> works correctly.
      </p>
      <div style={{ padding: '20px', border: '2px solid #f39c12', borderRadius: '8px', backgroundColor: '#fef9e7' }}>
        <h3 style={{ color: '#f39c12', marginTop: 0 }}>Working Filter</h3>
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
        <p style={{ color: '#f39c12', fontSize: '14px' }}>
          Try typing "al" or "bob" - the filter works perfectly. This was a trick to test your confidence!
        </p>
      </div>
    </div>
  )
}
