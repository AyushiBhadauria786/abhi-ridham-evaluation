import './App.css'
import Home from './pages/Home'
import CreateForm from './pages/CreateForm'
import PreviewForm from './pages/PreviewForm'
import { BrowserRouter as Router, Routes, Route  } from 'react-router'
// import { FormProvider } from './context/FormContext'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },

  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  }
});


function App() {

  console.log("Reloding....")
  return (
   <>
   <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<CreateForm />} />
          <Route path='/preview' element={<PreviewForm />} />
        </Routes>
      </Router>
   </ThemeProvider>
   </>
  )
}

export default App
