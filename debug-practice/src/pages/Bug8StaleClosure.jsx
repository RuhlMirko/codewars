import { useState, useEffect } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fetchId, setFetchId] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    let isCancelled = false

    const fetchData = async () => {
      setLoading(true)
      setError(null)
      setFetchCount(prev => prev + 1)

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${1 + fetchId}`
        )

        if (!response.ok) throw new Error('Failed to fetch')

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

    return () => { isCancelled = true }
  }, [])

  const triggerNewFetch = () => setFetchId(fetchId + 1)

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
      <p>Fetch ID (state): {fetchId}</p>
      <p>Actual API item fetched: {data.id}</p>
      <p>Effect runs: {fetchCount}</p>
      <button onClick={triggerNewFetch}>Fetch Next</button>
    </div>
  )
}

export default function Bug8StaleClosure() {
  return (
    <div>
      <h2>Bug 8: Data Fetcher</h2>
      <p style={{ marginBottom: '20px' }}>
        This component fetches data from an API and allows fetching the next item. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <DataFetcher />
      </div>
    </div>
  )
}
