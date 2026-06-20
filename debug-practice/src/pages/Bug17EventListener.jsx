import { useState, useEffect } from 'react'

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Try resizing the browser window.</p>
    </div>
  )
}

export default function Bug17EventListener() {
  return (
    <div>
      <h2>Bug 17: Window Resize</h2>
      <p style={{ marginBottom: '20px' }}>
        This component tracks window width. Inspect the code and find the bug.
        When fixed, resizing the window should update the width, and the event listener should be removed on unmount.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <WindowSize />
      </div>
    </div>
  )
}
