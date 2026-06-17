import { useState, useEffect } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fetchId, setFetchId] = useState(0)

  useEffect(() => {
    let isCancelled = false

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${1 + fetchId}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch')
        }

        const result = await response.json()

        if (!isCancelled) {
          setData(result)
          setLoading(false)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isCancelled = true
    }
  }, [])

  const triggerNewFetch = () => {
    setFetchId(fetchId + 1)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>Error: {error}</p>
        <button onClick={triggerNewFetch}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
      <p>Fetch ID: {fetchId}</p>
      <button onClick={triggerNewFetch}>Fetch Next</button>
    </div>
  )
}

export default DataFetcher
