import { useState } from 'react'

const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Diana', role: 'admin' },
  { id: 5, name: 'Eve', role: 'moderator' },
]

function UserList({ roleFilter }) {
  const [clickLog, setClickLog] = useState([])

  const filteredUsers = users.filter(u => u.role === roleFilter)

  const handleClick = (index) => {
    setClickLog(prev => [...prev, `Clicked: ${filteredUsers[index].name}`])
  }

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredUsers.map((user, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            style={{ padding: '10px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px', cursor: 'pointer' }}
          >
            {user.name} ({user.role})
          </li>
        ))}
      </ul>
      <p>Click log:</p>
      <div style={{ fontSize: '12px', backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', maxHeight: '100px', overflow: 'auto' }}>
        {clickLog.map((entry, i) => <div key={i}>{entry}</div>)}
      </div>
    </div>
  )
}

export default function Bug14KeyIndex() {
  const [role, setRole] = useState('user')

  return (
    <div>
      <h2>Bug 14: User List by Role</h2>
      <p style={{ marginBottom: '20px' }}>
        This component filters users by role and logs clicks. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <div style={{ marginBottom: '10px' }}>
          {['admin', 'user', 'moderator'].map(r => (
            <button key={r} onClick={() => setRole(r)} style={{ marginRight: '5px', fontWeight: role === r ? 'bold' : 'normal' }}>
              {r}
            </button>
          ))}
        </div>
        <UserList roleFilter={role} />
      </div>
    </div>
  )
}
