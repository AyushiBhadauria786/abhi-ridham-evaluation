import React, { useState } from 'react'

const ConcurrentRenderingExample: React.FC = () => {
    const[count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        //So here we calling set count multiple time so in react 19 these all updates are batch together and 
        //result it in a single re-render instead of multiple render. 
    }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ConcurrentRenderingExample;
