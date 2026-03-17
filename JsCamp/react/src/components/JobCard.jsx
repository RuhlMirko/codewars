import React  from "react"
export default function JobCard({ titulo, empresa, ubicacion, descripcion }) {
      const [isApplied, setIsApplied] = React.useState(false)

      function handleApplyClick() {
        setIsApplied(!isApplied)
      }

      const text = isApplied ? 'Aplicado' : 'Aplicar'
      const buttonClass = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
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
            className={buttonClass}
            onClick={handleApplyClick}
          >
            {text}
          </button>
        </article>
      )
    }