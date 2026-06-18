import { useState } from 'react'

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

function EmailValidator() {
  const [email, setEmail] = useState('')
  const [results, setResults] = useState([])

  const validate = () => {
    const isValid = regex.test(email)
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
          {email}: <span style={{ color: regex.test(email) ? 'green' : 'red' }}>
            {regex.test(email) ? 'VALID' : 'INVALID'}
          </span>
        </p>
      ))}
    </div>
  )
}

export default function Bug10EmailRegex() {
  return (
    <div>
      <h2>Bug 10: Email Validation</h2>
      <p style={{ marginBottom: '20px' }}>
        This component validates email addresses using a regex. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef', maxWidth: '500px' }}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <EmailValidator />
      </div>
    </div>
  )
}
