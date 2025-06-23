import React, { useEffect, useRef } from 'react'

interface IValueProps {
    value: number;
}

const ValueChangeDetector: React.FC<IValueProps> = ({value}) => {
    const prevValueRef = useRef<number | undefined>(undefined)


  useEffect(() => {
    if (prevValueRef.current !== undefined && prevValueRef.current !== value) {
      console.log("Value changed from:", prevValueRef.current, "->", value);
    }
    prevValueRef.current = value;
  }, [value]);


  

  return (
    <div>
      {value}
    </div>
  )
}

export default ValueChangeDetector
