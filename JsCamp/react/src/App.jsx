import Header from './components/Header'
import Footer from './components/Footer'
import SearchFormSection from './components/SearchFormSection'
import JobListings from './components/JobListings'
import Pagination from './components/Pagination'

function App() {

  return (
  <>
    <Header/>
    
    <main>
      <SearchFormSection />

      <section>
        <JobListings/>
        <Pagination />
      </section>
    </main>

    <Footer/>
  </>
  )
}

export default App
