import React  from "react"
export default function JobCard({ titulo, empresa, ubicacion, descripcion }) {
      const [isApplied, setIsApplied] = React.useState(false)

      function handleClick() {
        setIsApplied(!isApplied)
      }

      const text = isApplied ? 'Aplicado' : 'Aplicar'
      const buttonClass = isApplied ? 'is-applied' : ''
      const isAppliedText = isApplied ? 'Sí' : 'No'

      return (
        <article
          className="job-listing-card"
        >
          <div>
            <h3>{titulo}</h3>
            <small>{empresa} - {ubicacion} - ¿He aplicado? {isAppliedText}</small>
            <p>{descripcion}</p>
          </div>
          <button
            className={`button-apply-job`}
            onClick={handleClick}
          >
            {text}
          </button>
        </article>
      )
    }