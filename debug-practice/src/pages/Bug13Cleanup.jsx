import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

useEffect(() => {
  if (!running) return

  const id = setInterval(() => {
    setSeconds(s => s + 1)
  }, 1000)

  return () => clearInterval(id)
}, [running])

  return (
    <div>
      <p>Time: {seconds}s</p>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => { setSeconds(0); setRunning(false) }} style={{ marginLeft: '5px' }}>
        Reset
      </button>
    </div>
  )
}

export default function Bug13Cleanup() {
  return (
    <div>
      <h2>Bug 13: Timer</h2>
      <p style={{ marginBottom: '20px' }}>
        This timer starts and stops. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <Timer />
      </div>
    </div>
  )
}
