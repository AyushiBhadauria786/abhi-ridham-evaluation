import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage"
import LoginPage from './Pages/LoginPage'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import AddTransaction from './Pages/AddTransaction'
import Budget from './Pages/Budget'
import Transactions from './Pages/Transactions'
import Contact from './Pages/Contact'
import Reports from './Pages/Reports'
import Faq from './Pages/Faq'
import MainLayout from '../UiLayout/MainLayout'
import NotFound from './Pages/NotFound'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<Signup />}></Route>

          <Route path='/' element={<MainLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='addTransaction' element={<AddTransaction />} />
            <Route path='budget' element={<Budget />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='contact' element={<Contact />} />
            <Route path='reports' element={<Reports />} />
            <Route path='faq' element={<Faq />} />
          </Route>


          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
