import viteLogo from '../public/vite.svg'
import javascriptLogo from './javascript.svg'

export default function App(){
  return(
    <>

      <h1>Mirko Ruhl</h1>
      <h3>Full Stack Developer</h3>
      {/*
<ul className='shortcut'>
        <li><button>Github</button></li>
        <li><button>LinkedIn</button></li>
        <li><button>Email</button></li>
      </ul>*/
      }
      

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <section className='cta'>
        <div>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'm available for freelance work and collaborations.</p>
        </div>
        <div>
          <button>LinkedIn</button>
          <button>Email</button>
        </div>
        
      </section>

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