import { useState, useEffect } from 'react'

export default ({ duration }: {duration: number}) => {

    // todo: maybe refactor to take in elapsedTime as a prop too, to be managed centrally elsewhere
    const [elapsedTime, setElapsedTime] = useState<number>(duration)

    useEffect(() => {
        if(elapsedTime){
            setTimeout(() => {
                setElapsedTime(elapsedTime - 1000)
            }, 1000)
        }
    }, [elapsedTime])

    const padTo2Digits = (timeUnit: number): string => {
        return timeUnit <= 10 ? `0${timeUnit}` : `${timeUnit}`
    }

    let seconds: number = Math.floor(elapsedTime / 1000);
    let minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;

    return (
    <h2>duration: {`${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`}</h2>
    )

}