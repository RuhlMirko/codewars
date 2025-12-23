import viteLogo from '../public/vite.svg'
import javascriptLogo from './javascript.svg'

export default function App(){
  return(
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src={javascriptLogo} class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  )
}