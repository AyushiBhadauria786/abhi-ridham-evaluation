import React, { useState } from 'react'

const UseState = (p0: number) => {

    const [count,setCount] = useState(0);

    const Increment = () => { 
      setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }
  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default UseState