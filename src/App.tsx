import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme'
import { TimerWidget } from 'time-management-ui-lib'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// TODO: hardcoding stages for now, eventually we will allow users to create their own stages
const sessionStages = [
  {
    id: 0,
    name: 'focused work',
    duration: 40 * 60 * 1000,
  },
  {
    id: 1,
    name: 'excercise break',
    duration: 10 * 60 * 1000,
  },
  {
    id: 2,
    name: 'cleaning task',
    duration: 10 * 60 * 1000,
  },
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <main className="content">
          <TimerWidget stages={sessionStages} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
