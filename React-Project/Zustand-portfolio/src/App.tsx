import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Navbar from './Navbar/Navbar'

import Form from './component/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './component/PageNotFound'
import Preview from './component/Preview'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path='/form' element={<Form/>} />
      <Route path="*" element={<PageNotFound />} />
      <Route path='/preview' element={<Preview/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


