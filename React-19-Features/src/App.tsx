import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ExpensiveComponent from './Component/Memoization'
import FormParent from './Component/FormParent'
import UseCompareUseEffect from './Component/UseCompareUseEffect'
import ServerComponent from './Component/ServerComponent'
import MyForm from './Component/UseFormStatusParent'
import OptimisticComponent from './Component/UseOptimistic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ExpensiveComponent/> */}
      {/* <FormParent/> */}
      {/* <UseCompareUseEffect/> */}
      {/* <ServerComponent/> */}
      {/* <StatefulForm/> */}
      {/* <MyForm/> */}
      <OptimisticComponent/>
    </>
  )
}

export default App
