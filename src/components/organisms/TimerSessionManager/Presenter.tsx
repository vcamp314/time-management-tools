import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Timer from '../../atoms/Timer'
import './styles.css'

type AppProps = {

  stageName: string
  elapsedTime: number
  toggleBtnVerbiage: 'Start' | 'Pause' | 'Next session'
  togglePause: () => void
  resetSession: () => void

}

const Presenter = ({ stageName, elapsedTime, toggleBtnVerbiage, togglePause, resetSession }: AppProps) => {
  toggleBtnVerbiage
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Grid container spacing={2} >

          <Grid item xs={12} sx={{ pt: 0 }}>
            <h2>{stageName}</h2>
          </Grid>

          <Grid item xs={12}>
            <Timer elapsedTime={elapsedTime} />
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' onClick={togglePause}>
              {toggleBtnVerbiage}
            </Button>

            <Button variant='text' onClick={resetSession}>
              Reset
            </Button>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default Presenter