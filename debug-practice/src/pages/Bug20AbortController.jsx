import { useState, useEffect } from 'react'

function UserDetail({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [userId])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <p><strong>{user.name}</strong></p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
      <p>City: {user.address?.city}</p>
    </div>
  )
}

export default function Bug20AbortController() {
  const [currentId, setCurrentId] = useState(1)

  return (
    <div>
      <h2>Bug 20: AbortController</h2>
      <p style={{ marginBottom: '20px' }}>
        This component fetches a user profile. Inspect the code and find the bug.
        When fixed, switching between users quickly should cancel pending requests and always show the correct user.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <div style={{ marginBottom: '10px' }}>
          {[1, 2, 3, 4, 5].map(id => (
            <button key={id} onClick={() => setCurrentId(id)} style={{ marginRight: '5px', fontWeight: currentId === id ? 'bold' : 'normal' }}>
              User {id}
            </button>
          ))}
        </div>
        <UserDetail userId={currentId} />
      </div>
    </div>
  )
}
