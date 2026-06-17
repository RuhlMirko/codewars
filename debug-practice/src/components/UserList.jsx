import { useState } from 'react'

function UserList({ users }) {
  const [sortAscending, setSortAscending] = useState(true)

  const sortedUsers = [...users].sort((a, b) => {
    if (sortAscending) {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })

  const toggleSort = () => {
    setSortAscending(!sortAscending)
  }

  return (
    <div>
      <button onClick={toggleSort} style={{ marginBottom: '10px' }}>
        Sort: {sortAscending ? 'A-Z' : 'Z-A'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortedUsers.map((user, index) => (
          <li
            key={user.id}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
            }}
          >
            <strong>{user.name}</strong> ({user.age})
            <br />
            <small>{user.email}</small>
            <span style={{ marginLeft: '10px' }}>#{index + 1}</span>
          </li>
        ))}
      </ul>

      <p>Total users: {sortedUsers.length}</p>

      {sortedUsers.length === 0 && (
        <p style={{ color: 'red' }}>No users found!</p>
      )}
    </div>
  )
}

export default UserList
