import { useState, useEffect } from 'react'
import UserList from './components/UserList'
import Counter from './components/Counter'
import DataFetcher from './components/DataFetcher'
import { calculateTotal, formatPrice } from './utils/helpers'

const initialUsers = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' },
]

const cartItems = [
  { id: 1, name: 'Widget', price: 10.00, quantity: 2 },
  { id: 2, name: 'Gadget', price: 25.50, quantity: 1 },
  { id: 3, name: 'Gizmo', price: 15.00, quantity: 3 },
]

function App() {
  const [users] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const total = calculateTotal(cartItems)
  const formattedTotal = formatPrice(total)

  useEffect(() => {
    document.title = `User Admin - ${users.length} users`
  })

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Buggy User Admin</h1>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Counter (Memory Leak Bug)</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>User List (Key & Filter Bugs)</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: '8px', width: '200px', marginBottom: '10px' }}
        />
        <UserList users={filteredUsers} />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Data Fetcher (Race Condition Bug)</h2>
        <DataFetcher />
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Shopping Cart Total</h2>
        <p>Total: {formattedTotal}</p>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Theme Toggle</h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          Dark Mode: {darkMode ? 'ON' : 'OFF'}
        </button>
      </section>
    </div>
  )
}

export default App
