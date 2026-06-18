import { useState, useEffect } from 'react'

function BuggyFetcher() {
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
  }, []) // BUG: fetchId is missing! Effect never re-runs when fetchId changes.

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
      <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
        Notice: fetchId updates in state, but the API always fetches item #1 because the effect never re-runs!
      </p>
    </div>
  )
}

function FixedFetcher() {
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
  }, [fetchId]) // FIX: fetchId is in the dependency array

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
      <p style={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
        Each click fetches the next item - fetchId triggers a new effect run.
      </p>
    </div>
  )
}

export default function Bug8StaleClosure() {
  return (
    <div>
      <h2>Bug 8: DataFetcher Stale Closure</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Bug:</strong> The <code>useEffect</code> has an empty dependency array <code>[]</code>
        but uses <code>fetchId</code> inside. Since <code>fetchId</code> isn't in the deps,
        the effect never re-runs when <code>fetchId</code> changes - a classic <strong>stale closure</strong> bug.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef' }}>
          <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Buggy Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
            {'}, [])  // fetchId missing!'}
          </code>
          <BuggyFetcher />
        </div>
        <div style={{ padding: '20px', border: '2px solid #27ae60', borderRadius: '8px', backgroundColor: '#eafaf1' }}>
          <h3 style={{ color: '#27ae60', marginTop: 0 }}>Fixed Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#d4edda', borderRadius: '4px', fontSize: '13px' }}>
            {'}, [fetchId])  // effect re-runs when fetchId changes'}
          </code>
          <FixedFetcher />
        </div>
      </div>
    </div>
  )
}
