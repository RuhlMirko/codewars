import { useState, useEffect } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)
  const [intervalCount, setIntervalCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayCount(count)
      setIntervalCount(prev => prev + 1)
    }, 1000)

    // BUG: returns the interval ID (a number) instead of a cleanup function
    // React expects the cleanup to be a function, so the interval is NEVER cleared
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
      <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
        Click +/- multiple times and watch "Intervals fired" keep growing - old intervals are never cleaned up!
      </p>
    </div>
  )
}

function FixedCounter() {
  const [count, setCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)
  const [intervalCount, setIntervalCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayCount(count)
      setIntervalCount(prev => prev + 1)
    }, 1000)

    // FIX: return a cleanup function that calls clearInterval
    return () => clearInterval(intervalId)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Delayed Display: {displayCount}</p>
      <p>Intervals fired: {intervalCount}</p>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: '5px' }}>+</button>
      <button onClick={() => { setCount(0); setIntervalCount(0) }} style={{ marginLeft: '5px' }}>Reset</button>
      <p style={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
        Intervals are properly cleaned up - only one runs at a time.
      </p>
    </div>
  )
}

export default function Bug1CounterLeak() {
  return (
    <div>
      <h2>Bug 1/6: Counter Memory Leak</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Bug:</strong> <code>return intervalId</code> returns a number instead of a cleanup function.
        React expects the useEffect cleanup to be a <strong>function</strong>. Since a number is returned,
        <code>clearInterval</code> is never called, and intervals stack up forever.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef' }}>
          <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Buggy Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
            return intervalId  // returns a NUMBER, not a function!
          </code>
          <BuggyCounter />
        </div>
        <div style={{ padding: '20px', border: '2px solid #27ae60', borderRadius: '8px', backgroundColor: '#eafaf1' }}>
          <h3 style={{ color: '#27ae60', marginTop: 0 }}>Fixed Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#d4edda', borderRadius: '4px', fontSize: '13px' }}>
            return () =&gt; clearInterval(intervalId)  // returns a CLEANUP FUNCTION
          </code>
          <FixedCounter />
        </div>
      </div>
    </div>
  )
}
