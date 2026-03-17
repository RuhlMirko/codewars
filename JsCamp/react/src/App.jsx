import Header from './components/Header'
import Footer from './components/Footer'
import SearchFormSection from './components/SearchFormSection'
import JobListings from './components/JobListings'
import Pagination from './components/Pagination'

function App() {
  const handlePageChange=(page)=>{console.log('Cambiando la pagina a ' + page) }


  return (
  <>
    <Header/>
    
    <main>
      <SearchFormSection />

      <section>
        <JobListings/>
        <Pagination currPage={4} totalPages={5} onPageChange={handlePageChange}/>
      </section>
    </main>

    <Footer/>
  </>
  )
}

export default App
