import { useState, useCallback } from 'react'

function ExpensiveList({ items, onItemClick }) {
  console.log('ExpensiveList rendered')
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map(item => (
        <li key={item.id} style={{ padding: '8px', margin: '4px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          {item.name}
          <button onClick={() => onItemClick(item.id)} style={{ marginLeft: '10px' }}>Select</button>
        </li>
      ))}
    </ul>
  )
}

function FilteredList() {
  const [count, setCount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('')

  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
  ]

  const handleItemClick = (id) => {
    setSelected(id)
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <p>Unrelated state: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: '8px', marginLeft: '10px', width: '200px' }}
      />
      {selected && <p>Selected: {items.find(i => i.id === selected)?.name}</p>}
      <ExpensiveList items={filteredItems} onItemClick={handleItemClick} />
    </div>
  )
}

export default function Bug12UseCallback() {
  return (
    <div>
      <h2>Bug 12: Filterable List</h2>
      <p style={{ marginBottom: '20px' }}>
        This component has a filterable list with an unrelated counter. Inspect the code and find the bug.
        When fixed, clicking "Increment" should not re-render the list.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <FilteredList />
      </div>
    </div>
  )
}
