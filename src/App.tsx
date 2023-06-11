import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './Timer'
import './App.css'

const defaultDuration = 2*60*1000 // 2 min

function App() {
  const [elapsedTime, setElapsedTime] = useState<number>(defaultDuration)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  let timeoutId = 0

  useEffect(() => {
    if(isStarted && elapsedTime){
      timeoutId = setTimeout(() => {
            setElapsedTime(elapsedTime - 1000)
        }, 1000)
    }
}, [elapsedTime, isStarted])

  const resetSession = () => {
    setIsStarted(false)
    clearTimeout(timeoutId)
    setElapsedTime(defaultDuration)
  }

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
        <button onClick={resetSession}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
