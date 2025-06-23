import React, { useEffect, useState } from 'react'

const Timer: React.FC = () => {
    const[seconds,setSeconds] = useState<number>(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        },1000)

        return() => clearInterval(interval);
    },[])

  return (
    <p>
      Timer: {seconds} seconds
    </p>
  )
}

export default Timer
