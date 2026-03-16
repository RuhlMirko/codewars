import JobCard  from './JobCard'
import Pagination from './Pagination'
import JobListings from './JobListings'

export default function JobSearch(){
    
    return(
    <>
        <section className="jobs-search">
        <h1>Encuentra tu próximo trabajo</h1>        
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        </section>

        <section>
            <h2>Resultados de búsqueda</h2>
            <JobListings />
            <Pagination/>
        </section>
    </>
    )
}