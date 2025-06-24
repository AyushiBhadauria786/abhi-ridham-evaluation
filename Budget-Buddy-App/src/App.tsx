import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "../Pages/HomePage"
import LoginPage from '../Pages/LoginPage'
import Signup from '../Pages/Signup'
import Dashboard from '../Pages/Dashboard'
import AddTransaction from '../Pages/AddTransaction'
import Budget from '../Pages/Budget'
import Transactions from '../Pages/Transactions'
import Contact from '../Pages/Contact'
import Reports from '../Pages/Reports'
import Faq from '../Pages/Faq'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/addTransaction' element={<AddTransaction/>}></Route>
          <Route path='/budget' element={<Budget/>}></Route>
          <Route path='/transactions' element={<Transactions/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/reports' element={<Reports/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
