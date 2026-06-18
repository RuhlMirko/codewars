const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
]

export default function Bug9KeyProp() {
  return (
    <div>
      <h2>Bug 9: Key Prop</h2>
      <p style={{ marginBottom: '20px' }}>
        This component renders a list of users. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ padding: '10px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <strong>{user.name}</strong> ({user.age})
            </li>
          ))}
        </ul>
        <p>Total: {users.length} users</p>
      </div>
    </div>
  )
}
