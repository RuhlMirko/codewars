import viteLogo from '../public/vite.svg'
import javascriptLogo from './javascript.svg'

export default function App(){
  return(
    <>

      <h1>Mirko Ruhl</h1>
      <h2>Full Stack Developer</h2>
      <hr />

      <div className='grid-container'>
        <div className='box' style={{ gridArea: 'box-1' }}>
        </div>
        <div className='box' style={{ gridArea: 'box-2' }}>
        </div>
        <div className='box' style={{ gridArea: 'box-3' }}>
        </div>
        <div className='box' style={{ gridArea: 'box-4' }}>
        </div>
        <div className='box' style={{ gridArea: 'box-5' }}>
        </div>
      </div>
    </>
  )
}