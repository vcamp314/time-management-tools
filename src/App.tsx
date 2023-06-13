import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './Timer'
import './App.css'

const defaultDuration = 2*60*1000 // 2 min
// temporary mock data:
const sessionStages = [
  {
    stageName: 'focused work',
    stageDuration: 40*60*1000
  },
  {
    stageName: 'exercise break',
    stageDuration: 10*60*1000
  },
  {
    stageName: 'cleaning/admin tasks',
    stageDuration: 10*60*1000
  }
]

function App() {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(sessionStages[currentStageIndex].stageDuration)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  let timeoutId = 0

  useEffect(() => {
    if (isStarted && elapsedTime) {
      timeoutId = setTimeout(() => {
            setElapsedTime(elapsedTime - 1000)
        }, 1000)
    }
    if (elapsedTime <= 0) {
      startNextStage()
    }
}, [elapsedTime, isStarted])

  const resetSession = () => {
    setIsStarted(false)
    clearTimeout(timeoutId)
    setCurrentStageIndex(0)
    setElapsedTime(sessionStages[0].stageDuration)
  }

  const startNextStage = () => {
    if (currentStageIndex >= sessionStages.length - 1) return
    
    setElapsedTime(sessionStages[currentStageIndex + 1].stageDuration)
    setCurrentStageIndex(currentStageIndex + 1)
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
      <h2>{sessionStages[currentStageIndex].stageName}</h2>
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
