import { useState, useEffect } from 'react'

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
]

function BuggyEffect() {
  const [count, setCount] = useState(0)
  const [effectLog, setEffectLog] = useState([])

  useEffect(() => {
    document.title = `Users: ${users.length} | Count: ${count}`
    setEffectLog(prev => [...prev, `Effect ran (count=${count})`])
  })
  // BUG: No dependency array - runs on EVERY render

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
      <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
        Effect runs on EVERY render - even when unrelated state changes!
      </p>
    </div>
  )
}

function FixedEffect() {
  const [count, setCount] = useState(0)
  const [effectLog, setEffectLog] = useState([])

  useEffect(() => {
    document.title = `Users: ${users.length} | Count: ${count}`
    setEffectLog(prev => [...prev, `Effect ran (count=${count})`])
  }, [count])
  // FIX: dependency array - only runs when count changes

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
      <p style={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
        Effect only runs when count actually changes.
      </p>
    </div>
  )
}

export default function Bug2UseEffectDeps() {
  return (
    <div>
      <h2>Bug 2/7: useEffect Missing Dependency Array</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Bug:</strong> A <code>useEffect</code> has no dependency array, so it runs after
        <strong> every single render</strong>. This is wasteful and can cause unnecessary re-renders
        or API calls.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef' }}>
          <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Buggy Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
            {'useEffect(() => { ... })  // no dependency array!'}
          </code>
          <BuggyEffect />
        </div>
        <div style={{ padding: '20px', border: '2px solid #27ae60', borderRadius: '8px', backgroundColor: '#eafaf1' }}>
          <h3 style={{ color: '#27ae60', marginTop: 0 }}>Fixed Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#d4edda', borderRadius: '4px', fontSize: '13px' }}>
            {'useEffect(() => { ... }, [count])  // only re-runs when count changes'}
          </code>
          <FixedEffect />
        </div>
      </div>
    </div>
  )
}
