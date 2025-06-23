import React, { memo, useMemo } from 'react'

const UseCallbackUse = memo(({ onClick }:any) => {
    console.log('Child component rendered');
    return (
      <button onClick={onClick}>Click me</button>
    );
  });

export default UseCallbackUse