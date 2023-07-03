import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme'
import TimerSessionManager from './components/organisms/TimerSessionManager'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <main className="content">
          {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
          <TimerSessionManager />
        </main>
      </div>

    </ThemeProvider>
  )
}

export default App
