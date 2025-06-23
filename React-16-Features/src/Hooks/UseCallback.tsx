import React, { useCallback, useState } from 'react'
import UseCallbackUse from './UseCallbackUse';


const UseCallback = () => {

    const [count,setCount] = useState(0);


    const handleClick = useCallback(() => {
        setCount(PrevCount => PrevCount + 1);
    },[])

    console.log('Parent component rendered');
    return (
        <div>
          <p>Count: {count}</p>
          <UseCallbackUse onClick={handleClick} />
        </div>
      );
}

export default UseCallback