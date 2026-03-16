import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Header from './components/Header'
import Footer from './components/Footer'
import JobSearch from './components/JobSearch'

function App() {

  return (
  <>
    <Header/>

    <main>
      <JobSearch/>
    </main>

    <Footer/>
  </>
  )
}

export default App
