
import JobCard from './JobCard'

export default function JobListings({jobs}){
    return(
        <>

        <h2>Resultados de búsqueda</h2>
        <div className="jobs-listings">{
                    jobs.map((post)=>{
                        return(
                            <JobCard
                            titulo={post.titulo}
                            empresa={post.empresa}
                            ubicacion={post.empresa}
                            descripcion={post.descripcion}
                            key={post.id}
                            />
                        )
                    })}            
            </div>
    </>)
}