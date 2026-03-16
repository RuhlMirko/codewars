import data from '../data.json'
import JobCard from './JobCard'

export default function JobListings(){
    return(
        <div className="jobs-listings">{
                    data.map(post=>{
                        return(
                            <JobCard
                            titulo={post.titulo}
                            empresa={post.empresa}
                            ubicacion={post.empresa}
                            descripcion={post.descripcion}
                            />
                        )
                    })}            
            </div>
    )
}