import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayCount(count)
    }, 1000)

    return intervalId
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Delayed Display: {displayCount}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: '5px' }}>+</button>
      <button onClick={reset} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  )
}

export default Counter
