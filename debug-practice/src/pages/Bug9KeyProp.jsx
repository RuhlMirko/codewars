const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
]

export default function Bug9KeyProp() {
  return (
    <div>
      <h2>Bug 9: Key Prop (Red Herring)</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Verdict:</strong> This is another <strong>confidence check</strong> - there is no bug here.
        The code uses <code>key={'{user.id}'}</code> which is correct since user IDs are unique.
        The hint about index-based keys is misleading - the actual code doesn't use index as a key.
      </p>
      <div style={{ padding: '20px', border: '2px solid #f39c12', borderRadius: '8px', backgroundColor: '#fef9e7' }}>
        <h3 style={{ color: '#f39c12', marginTop: 0 }}>Correct Key Usage</h3>
        <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
          {'<li key={user.id}>  // using unique ID - correct!'}
        </code>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ padding: '10px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <strong>{user.name}</strong> ({user.age})
            </li>
          ))}
        </ul>
        <p style={{ color: '#f39c12', fontSize: '14px', marginTop: '10px' }}>
          Using <code>user.id</code> as the key is the correct approach. No bug here!
        </p>
      </div>
    </div>
  )
}
