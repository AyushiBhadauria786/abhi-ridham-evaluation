import './App.css'
import Home from './pages/Home'
import CreateForm from './pages/CreateForm'
import PreviewForm from './pages/PreviewForm'
import { BrowserRouter as Router, Routes, Route  } from 'react-router'


function App() {

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<CreateForm />} />
        <Route path='/preview' element={<PreviewForm />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
