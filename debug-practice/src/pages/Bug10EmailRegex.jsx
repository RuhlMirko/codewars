import { useState } from 'react'

const buggyRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const fixedRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const testEmails = [
  'user@example.com',
  '.test@gmail.com',
  'test@.com',
  'test..test@gmail.com',
  'test@gmail.c',
  'valid.email+tag@domain.co.uk',
  'plainaddress',
  '@missinglocal.com',
  'user@',
]

function BuggyValidation() {
  const [email, setEmail] = useState('')
  const [results, setResults] = useState([])

  const validate = () => {
    const isValid = buggyRegex.test(email)
    setResults(prev => [...prev.slice(-4), { email, valid: isValid }])
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <button onClick={validate}>Validate</button>
      </div>
      {results.map((r, i) => (
        <p key={i} style={{ color: r.valid ? 'green' : 'red', fontSize: '14px', margin: '3px 0' }}>
          {r.email}: {r.valid ? 'VALID' : 'INVALID'}
        </p>
      ))}
      <hr style={{ margin: '15px 0' }} />
      <p style={{ fontSize: '13px', color: '#666' }}>Predefined test cases:</p>
      {testEmails.map(email => (
        <p key={email} style={{ fontSize: '13px', margin: '2px 0' }}>
          {email}: <span style={{ color: buggyRegex.test(email) ? 'green' : 'red' }}>
            {buggyRegex.test(email) ? 'VALID' : 'INVALID'}
          </span>
        </p>
      ))}
      <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
        Accepts invalid emails like ".test@gmail.com" and "test@.com"!
      </p>
    </div>
  )
}

function FixedValidation() {
  const [email, setEmail] = useState('')
  const [results, setResults] = useState([])

  const validate = () => {
    const isValid = fixedRegex.test(email)
    setResults(prev => [...prev.slice(-4), { email, valid: isValid }])
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <button onClick={validate}>Validate</button>
      </div>
      {results.map((r, i) => (
        <p key={i} style={{ color: r.valid ? 'green' : 'red', fontSize: '14px', margin: '3px 0' }}>
          {r.email}: {r.valid ? 'VALID' : 'INVALID'}
        </p>
      ))}
      <hr style={{ margin: '15px 0' }} />
      <p style={{ fontSize: '13px', color: '#666' }}>Predefined test cases:</p>
      {testEmails.map(email => (
        <p key={email} style={{ fontSize: '13px', margin: '2px 0' }}>
          {email}: <span style={{ color: fixedRegex.test(email) ? 'green' : 'red' }}>
            {fixedRegex.test(email) ? 'VALID' : 'INVALID'}
          </span>
        </p>
      ))}
      <p style={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
        Properly rejects invalid emails while accepting valid ones.
      </p>
    </div>
  )
}

export default function Bug10EmailRegex() {
  return (
    <div>
      <h2>Bug 10: Email Validation Regex</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Bug:</strong> The regex <code>/^[^\s@]+@[^\s@]+\.[^\s@]+$/</code> is too permissive.
        It accepts invalid emails like <code>.test@gmail.com</code> (leading dot) and <code>test@.com</code>
        (dot after @). The fix uses a stricter pattern.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef' }}>
          <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Buggy Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '12px', wordBreak: 'break-all' }}>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          </code>
          <BuggyValidation />
        </div>
        <div style={{ padding: '20px', border: '2px solid #27ae60', borderRadius: '8px', backgroundColor: '#eafaf1' }}>
          <h3 style={{ color: '#27ae60', marginTop: 0 }}>Fixed Version</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#d4edda', borderRadius: '4px', fontSize: '12px', wordBreak: 'break-all' }}>
            {'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/'}
          </code>
          <FixedValidation />
        </div>
      </div>
    </div>
  )
}
