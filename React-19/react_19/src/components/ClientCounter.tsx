import React from 'react'
import { useState } from 'react'


const ClientCounter = () => {
    const[count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter (Client)</h2>
      <button onClick={() => setCount((cnt) => cnt + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default ClientCounter;
