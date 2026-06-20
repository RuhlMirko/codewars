import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Bug1CounterLeak from './pages/Bug1CounterLeak'
import Bug2UseEffectDeps from './pages/Bug2UseEffectDeps'
import Bug3UserSearch from './pages/Bug3UserSearch'
import Bug4UserSort from './pages/Bug4UserSort'
import Bug5PriceCalc from './pages/Bug5PriceCalc'
import Bug8StaleClosure from './pages/Bug8StaleClosure'
import Bug9KeyProp from './pages/Bug9KeyProp'
import Bug10EmailRegex from './pages/Bug10EmailRegex'
import Bug11StateMutation from './pages/Bug11StateMutation'
import Bug12UseCallback from './pages/Bug12UseCallback'
import Bug13Cleanup from './pages/Bug13Cleanup'
import Bug14KeyIndex from './pages/Bug14KeyIndex'
import Bug15AsyncRace from './pages/Bug15AsyncRace'
import Bug16Batching from './pages/Bug16Batching'
import Bug17EventListener from './pages/Bug17EventListener'
import Bug18AutoFocus from './pages/Bug18AutoFocus'
import Bug19DebounceSearch from './pages/Bug19DebounceSearch'
import Bug20AbortController from './pages/Bug20AbortController'

const bugs = [
  { path: '/bug1', label: 'Bug 1/6: Counter', isCompleted: true },
  { path: '/bug2', label: 'Bug 2/7: useEffect' , isCompleted: true },
  { path: '/bug3', label: 'Bug 3: User Search' , isCompleted: true },
  { path: '/bug4', label: 'Bug 4: User Sort' , isCompleted: true },
  { path: '/bug5', label: 'Bug 5: Price Calc' , isCompleted: true },
  { path: '/bug8', label: 'Bug 8: Data Fetcher' , isCompleted: true },
  { path: '/bug9', label: 'Bug 9: Key Prop' , isCompleted: true },
  { path: '/bug10', label: 'Bug 10: Email Regex' , isCompleted: true },
  { path: '/bug11', label: 'Bug 11: Todo List' , isCompleted: true },
  { path: '/bug12', label: 'Bug 12: Filterable List' },
  { path: '/bug13', label: 'Bug 13: Timer' , isCompleted: true },
  { path: '/bug14', label: 'Bug 14: User List by Role', isCompleted: true },
  { path: '/bug15', label: 'Bug 15: User Profile' },
  { path: '/bug16', label: 'Bug 16: Counter +3', isCompleted: true },
  { path: '/bug17', label: 'Bug 17: Window Resize', isCompleted: true },
  { path: '/bug18', label: 'Bug 18: Auto-Focus Input' },
  { path: '/bug19', label: 'Bug 19: Search Debounce' },
  { path: '/bug20', label: 'Bug 20: AbortController' },
]

function Home() {
  return (
    <div>
      <h1>React Bug Practice</h1>
      <p style={{ marginBottom: '20px' }}>
        18 components with bugs. Find and fix them.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bugs.map(bug => (
          <li key={bug.path} style={{ margin: '8px 0' }}>
            <Link
              to={bug.path}
              style={{
                display: 'block',
                padding: '12px 16px',
                backgroundColor: bug.isCompleted ? 'green':'red',
                border: `2px solid ${bug.isCompleted ? '#6eb645': '#d65858'}` ,
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'white',
                transition: 'transform 0.1s',
              }}
            >
              {bug.label}
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
        <Route path="/bug11" element={<Bug11StateMutation />} />
        <Route path="/bug12" element={<Bug12UseCallback />} />
        <Route path="/bug13" element={<Bug13Cleanup />} />
        <Route path="/bug14" element={<Bug14KeyIndex />} />
        <Route path="/bug15" element={<Bug15AsyncRace />} />
        <Route path="/bug16" element={<Bug16Batching />} />
        <Route path="/bug17" element={<Bug17EventListener />} />
        <Route path="/bug18" element={<Bug18AutoFocus />} />
        <Route path="/bug19" element={<Bug19DebounceSearch />} />
        <Route path="/bug20" element={<Bug20AbortController />} />
      </Routes>
    </div>
  )
}
