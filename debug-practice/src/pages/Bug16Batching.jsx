import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const incrementThree = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementThree}>+3</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  )
}

export default function Bug16Batching() {
  return (
    <div>
      <h2>Bug 16: Counter +3</h2>
      <p style={{ marginBottom: '20px' }}>
        This counter should add 3 on each click. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <Counter />
      </div>
    </div>
  )
}
