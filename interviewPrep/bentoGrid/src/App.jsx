import viteLogo from '../public/vite.svg'
import javascriptLogo from './javascript.svg'

export default function App(){
  return(
    <>

      <h1>Mirko Ruhl</h1>
      <h3>Full Stack Developer</h3>
      
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

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