import React, { useEffect, useRef } from 'react'

const Timer = () => {
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            console.log('Tick');
        },2000)

        return () => {
            if(intervalRef.current !== null){
                clearInterval(intervalRef.current);
                console.log('Interval Cleared');
            }
        };
    },[]);


  return (
    <div>
      Check the console to see the timer    ticks!
    </div>
  )
}

export default Timer;
