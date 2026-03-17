import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchFormSection from './components/SearchFormSection'
import JobListings from './components/JobListings'
import Pagination from './components/Pagination'

import jobsData from './data.json'
const RESULT_PER_PAGE = 4

function App() {
  const [currPage, setCurrPage] = useState(1)
  const [textToFilter, setTextToFilter] = useState('')
  const jobsWithTextFilter = textToFilter === ''?jobsData:jobsData.filter(job=>job.titulo.toLowerCase().includes(textToFilter.toLowerCase()))
  const totalPages = Math.ceil(jobsWithTextFilter.length/RESULT_PER_PAGE)
  const pageResults = jobsWithTextFilter.slice(
    (currPage-1)* RESULT_PER_PAGE, currPage * RESULT_PER_PAGE
  )

  const handlePageChange=(page)=>{
    setCurrPage(page)
  }  

  
  const handleSearch= () =>{

  }

  const handleTextFilter = (newTextToFilter)=>{
    setTextToFilter(newTextToFilter)
    setCurrPage(1)
  }

  return (
  <>
    <Header/>
    
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>

      <section>
        <JobListings jobs={pageResults}/>
        <Pagination currPage={currPage} totalPages={totalPages} onPageChange={handlePageChange}/>
      </section>
    </main>

    <Footer/>
  </>
  )
}

export default App
