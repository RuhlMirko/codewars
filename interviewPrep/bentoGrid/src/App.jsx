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

      <section className='projects'>
        <h2>My Projects</h2>
        <div className='projects-container'>
          <div className='project-card'>
            <h3>Tenzies game</h3>
            <div>
              <p>An interactive dice game where players roll until all dice show the same number. Features a timer and high score tracking with localStorage.
                <br /><br />
                In this project I learned how to use React useState hook and persistent data storage.
                <br /><br />
                The hardest part was implementing a real-time timer and integrating localStorage for tracking high scores.  </p>
            </div>
          </div>
          <div className='project-card'>
            <h3>Assembly Endgame</h3>
            <div>
              <p>An interactive dice game where players roll until all dice show the same number. Features a timer and high score tracking with localStorage.
                <br /><br />
                In this project I learned how to use React useState hook and persistent data storage.
                <br /><br />
                The hardest part was implementing a real-time timer and integrating localStorage for tracking high scores.  </p>
            </div>
          </div>
        </div>
        
      </section>

      <section className='skills' >
        <h2>My Skills</h2>
        <div className='grid-container'>
          <div className='box' style={{ gridArea: 'box-1' }}>
            <h3>Frontend</h3>
            <ul>
              <li className='pill'>JavaScript</li>
              <li className='pill'>Html5</li>
              <li className='pill'>CSS</li>
            </ul>
          </div>
          <div className='box' style={{ gridArea: 'box-2' }}>
            <h3>Backend</h3>
            <ul>
              <li className='pill'>JavaScript</li>
              <li className='pill'>JavaScript</li>
              <li className='pill'>JavaScript</li>
            </ul>
          </div>
          <div className='box' style={{ gridArea: 'box-3' }}>
            <h3>Mobile</h3>
            <ul>
              <li className='pill'>JavaScript</li>
              <li className='pill'>JavaScript</li>
              <li className='pill'>JavaScript</li>
            </ul>
          </div>
          <div className='box' style={{ gridArea: 'box-4' }}>
          </div>
          <div className='box' style={{ gridArea: 'box-5' }}>
        </div>
      </div>
      </section>

      
    </>
  )
}