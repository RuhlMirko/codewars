import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)
  const [intervalCount, setIntervalCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayCount(count)
      setIntervalCount(prev => prev + 1)
    }, 1000)

    return intervalId
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Delayed Display: {displayCount}</p>
      <p>Intervals fired: {intervalCount}</p>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: '5px' }}>+</button>
      <button onClick={() => { setCount(0); setIntervalCount(0) }} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  )
}

export default function Bug1CounterLeak() {
  return (
    <div>
      <h2>Bug 1/6: Counter</h2>
      <p style={{ marginBottom: '20px' }}>
        This counter has a useEffect with a cleanup. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <Counter />
      </div>
    </div>
  )
}
