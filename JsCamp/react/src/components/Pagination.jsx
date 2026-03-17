
export default function Pagination({currPage=1, totalPages=1, onPageChange}){
    const pages = Array.from({length:totalPages},(_,i)=>i+ 1)

    const isFirstPage = currPage === 1
    const isLastPage = currPage === totalPages
    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {}
    const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {}

    const handlePrevClick = (e)=>{
      e.preventDefault()
      if(!isFirstPage){
        onPageChange(currPage-1)
      }
    } 
    
    const handleNextClick = (e)=>{
      e.preventDefault()
      if(!isLastPage){
        onPageChange(currPage+1)
      }
    } 

    const handleChangePage= (event)=>{
      event.preventDefault()
      const page = Number(event.target.dataset.page)
      if( page !== currPage){
        onPageChange(page)
      }
    }

    

    return(
        <nav className="pagination">
          <a href="#" onClick={handlePrevClick} style={stylePrevButton}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" /></svg>
          </a>             

          {pages.map(page => (
            <a key={page} data-page={page} href="#" className={currPage === page?'is-active':''} onClick={handleChangePage}>
                {page}
            </a>
          ))}
          
          <a href="#" onClick={handleNextClick} style={styleNextButton}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>          
        </nav>
    )
}