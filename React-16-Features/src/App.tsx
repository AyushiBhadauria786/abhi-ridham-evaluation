import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
// import UseContext, { ThemeContext } from './Hooks/UseContext'
// import { Header } from './Hooks/UseContextUse'
import UseCallback from './Hooks/UseCallback'
import UseMemo from './Hooks/UseMemo'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
import Form from './Form/Form'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseContext>
    <Header/>
    </UseContext> */}

    {/* <UseCallback/> */}
    {/* <UseMemo/> */}
    {/* <UseRef/> */}

    {/* <UseReducer/> */}

    <Form/>
    
    </>
  )
}

export default App
