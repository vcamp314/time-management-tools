import { useState, useEffect } from 'react'
import Presenter from './Presenter'

// temporary mock data:
const sessionStages = [
    {
        stageName: 'focused work',
        stageDuration: 40 * 60 * 1000
    },
    {
        stageName: 'exercise break',
        stageDuration: 10 * 60 * 1000
    },
    {
        stageName: 'cleaning/admin tasks',
        stageDuration: 10 * 60 * 1000
    }
]

const Container = () => {
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

    //   todo: refactor to improve UX
    const togglePause = () => {
        console.log("toggled pause")
        console.log("isStarted before: ", isStarted)
        setIsStarted(!isStarted)
        console.log("isStarted after: ", isStarted)
    }

    return (
        <>
            <Presenter 
            stageName={sessionStages[currentStageIndex].stageName} 
            elapsedTime={elapsedTime} 
            toggleBtnVerbiage={isStarted? 'Pause' : 'Start'} 
            togglePause={togglePause} 
            resetSession={resetSession} />
        </>


    )
}

export default Container