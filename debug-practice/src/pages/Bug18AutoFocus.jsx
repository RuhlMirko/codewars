import { useState, useRef, useEffect } from 'react'

function AutoFocusInput() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="I should auto-focus..."
        style={{ padding: '8px', width: '250px' }}
      />
      <p>Value: {value}</p>
    </div>
  )
}

export default function Bug18AutoFocus() {
  return (
    <div>
      <h2>Bug 18: Auto-Focus Input</h2>
      <p style={{ marginBottom: '20px' }}>
        This input should auto-focus on mount. Inspect the code and find the bug.
        When fixed, the input should be focused only once when the component first appears, not on every render.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <AutoFocusInput />
      </div>
    </div>
  )
}
