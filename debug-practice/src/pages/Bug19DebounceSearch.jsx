import { useState, useEffect } from 'react'

function SearchResults() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchCount, setSearchCount] = useState(0)

  // eslint-disable-next-line no-unused-vars
  const debouncedSetSearch = (value) => {
    setTimeout(() => {
      setQuery(value)
    }, 500)
  }

  useEffect(() => {
    if (!query) {
      setResults([])
      setLoading(false)
      return
    }

    setLoading(true)
    setSearchCount(prev => prev + 1)

    fetch(`https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.slice(0, 5))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [query])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }}
      />
      <p style={{ fontSize: '12px', color: '#888' }}>API calls made: {searchCount}</p>
      {loading && <p>Searching...</p>}
      {!loading && results.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map(post => (
            <li key={post.id} style={{ padding: '8px', margin: '4px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <strong>{post.title}</strong>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#666' }}>{post.body.slice(0, 80)}...</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && query && results.length === 0 && <p>No results found.</p>}
    </div>
  )
}

export default function Bug19DebounceSearch() {
  return (
    <div>
      <h2>Bug 19: Search Debounce</h2>
      <p style={{ marginBottom: '20px' }}>
        This search component should debounce API calls so it doesn't fire on every keystroke.
        Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <SearchResults />
      </div>
    </div>
  )
}
