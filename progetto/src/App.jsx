import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx';

function App() {
  const [count, setCount] = useState(0)
    const title = "Eragon"
    const author = "Christopher Paolini"
    const age = 41;
  

  return (
    <>
      <div className='container-fluid' style={{'display':'flex', 'justifyContent':'space-around'}}>
        <article>
          <header>{title}</header>
          <div>{author}</div>
          <footer>{age}</footer>
        </article>
      </div>
      <Button/>
      
    
      <><div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div><h1>Vite + React</h1><div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div><p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p></>

    </>
  )
}

export default App
