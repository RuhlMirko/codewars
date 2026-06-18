import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Bug1CounterLeak from './pages/Bug1CounterLeak'
import Bug2UseEffectDeps from './pages/Bug2UseEffectDeps'
import Bug3UserSearch from './pages/Bug3UserSearch'
import Bug4UserSort from './pages/Bug4UserSort'
import Bug5PriceCalc from './pages/Bug5PriceCalc'
import Bug8StaleClosure from './pages/Bug8StaleClosure'
import Bug9KeyProp from './pages/Bug9KeyProp'
import Bug10EmailRegex from './pages/Bug10EmailRegex'

const bugs = [
  { path: '/bug1', label: 'Bug 1/6: Counter Memory Leak', type: 'real' },
  { path: '/bug2', label: 'Bug 2/7: useEffect Missing Deps', type: 'real' },
  { path: '/bug3', label: 'Bug 3: User Search Filter', type: 'red-herring' },
  { path: '/bug4', label: 'Bug 4: User List Sorting', type: 'red-herring' },
  { path: '/bug5', label: 'Bug 5: Price Calculation', type: 'defensive' },
  { path: '/bug8', label: 'Bug 8: Stale Closure', type: 'real' },
  { path: '/bug9', label: 'Bug 9: Key Prop', type: 'red-herring' },
  { path: '/bug10', label: 'Bug 10: Email Regex', type: 'real' },
]

function Home() {
  return (
    <div>
      <h1>React Bug Practice</h1>
      <p style={{ marginBottom: '10px' }}>
        10 intentional bugs to find and fix. Each page shows a <strong>Buggy</strong> and <strong>Fixed</strong> version side-by-side.
      </p>
      <p style={{ marginBottom: '20px', fontSize: '14px', color: '#888' }}>
        <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#e74c3c', borderRadius: '2px', marginRight: '4px', verticalAlign: 'middle' }}></span> Real bug &nbsp;
        <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#f39c12', borderRadius: '2px', marginRight: '4px', verticalAlign: 'middle' }}></span> Red herring (no bug) &nbsp;
        <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#f39c12', borderRadius: '2px', marginRight: '4px', verticalAlign: 'middle' }}></span> Defensive coding
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bugs.map(bug => (
          <li key={bug.path} style={{ margin: '8px 0' }}>
            <Link
              to={bug.path}
              style={{
                display: 'block',
                padding: '12px 16px',
                backgroundColor: bug.type === 'real' ? '#fdf0ef' : '#fef9e7',
                border: `2px solid ${bug.type === 'real' ? '#e74c3c' : '#f39c12'}`,
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.1s',
              }}
            >
              {bug.label}
              <span style={{ float: 'right', fontSize: '13px', color: '#888' }}>
                {bug.type === 'real' ? 'REAL BUG' : bug.type === 'defensive' ? 'DEFENSIVE' : 'RED HERRING'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {!isHome && (
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ color: '#aa3bff', textDecoration: 'none', fontWeight: 'bold' }}>
            &larr; Back to all bugs
          </Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bug1" element={<Bug1CounterLeak />} />
        <Route path="/bug2" element={<Bug2UseEffectDeps />} />
        <Route path="/bug3" element={<Bug3UserSearch />} />
        <Route path="/bug4" element={<Bug4UserSort />} />
        <Route path="/bug5" element={<Bug5PriceCalc />} />
        <Route path="/bug8" element={<Bug8StaleClosure />} />
        <Route path="/bug9" element={<Bug9KeyProp />} />
        <Route path="/bug10" element={<Bug10EmailRegex />} />
      </Routes>
    </div>
  )
}
