import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './Timer'
import './App.css'

function App() {
  const [elapsedTime, setElapsedTime] = useState<number>(120000)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  useEffect(() => {
    if(isStarted && elapsedTime){
        setTimeout(() => {
            setElapsedTime(elapsedTime - 1000)
        }, 1000)
    }
}, [elapsedTime, isStarted])

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
      <Timer elapsedTime={elapsedTime} />
      <div className="card">
        <button onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'Pause' : 'Start'}
        </button>
      </div>
    </>
  )
}

export default App
