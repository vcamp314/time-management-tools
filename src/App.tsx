import { ThemeProvider, createTheme } from '@mui/material/styles';
import TimerSessionManager from './components/TimerSessionManager'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <TimerSessionManager />
    </ThemeProvider>
  )
}

export default App
