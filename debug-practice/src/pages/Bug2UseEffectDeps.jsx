import { useState, useEffect } from 'react'

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
]

function EffectDemo() {
  const [count, setCount] = useState(0)
  const [effectLog, setEffectLog] = useState([])

  useEffect(() => {
    document.title = `Users: ${users.length} | Count: ${count}`
    setEffectLog(prev => [...prev, `Effect ran (count=${count})`])
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Re-render</button>
      <p style={{ fontSize: '13px', marginTop: '10px' }}>Effect log:</p>
      <div style={{ maxHeight: '150px', overflow: 'auto', fontSize: '12px', backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px' }}>
        {effectLog.map((entry, i) => (
          <div key={i}>{entry}</div>
        ))}
      </div>
    </div>
  )
}

export default function Bug2UseEffectDeps() {
  return (
    <div>
      <h2>Bug 2/7: useEffect Behavior</h2>
      <p style={{ marginBottom: '20px' }}>
        This component has a useEffect that updates the document title. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <EffectDemo />
      </div>
    </div>
  )
}
