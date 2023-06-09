
export default ({ elapsedTime}: {elapsedTime: number}) => {


    const padTo2Digits = (timeUnit: number): string => {
        return timeUnit <= 10 ? `0${timeUnit}` : `${timeUnit}`
    }

    let seconds: number = Math.floor(elapsedTime / 1000);
    let minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;

    return (
    <h1>{`${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`}</h1>
    )

}