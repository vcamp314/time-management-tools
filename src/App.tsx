import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [elapsedTime, setElapsedTime] = useState<number>(120000)
  const [isStarted, setIsStarted] = useState<boolean>(true)

  useEffect(() => {
    if(isStarted && elapsedTime){
        setTimeout(() => {
            setElapsedTime(elapsedTime - 1000)
        }, 1000)
    }
}, [elapsedTime])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Timer elapsedTime={elapsedTime} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
