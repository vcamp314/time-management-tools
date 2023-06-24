import Button from '@mui/material/Button'
import Timer from '../../atoms/Timer'
import './styles.css'

type AppProps = {

    stageName: string
    elapsedTime: number
    toggleBtnVerbiage: 'Start' | 'Pause'
    togglePause: () => void
    resetSession: () => void

}

const Presenter = ({stageName, elapsedTime, toggleBtnVerbiage, togglePause, resetSession}: AppProps) => {
toggleBtnVerbiage
  return (
    <>
      <h2>{stageName}</h2>
      <Timer elapsedTime={elapsedTime} />
      <div className="card">
        <Button onClick={togglePause}>
          {toggleBtnVerbiage}
        </Button>
        <Button onClick={resetSession}>
          Reset
        </Button>
      </div>
    </>
  )
}

export default Presenter