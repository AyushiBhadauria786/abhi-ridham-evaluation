import React, { useReducer } from 'react'


    const initalState = {count : 0}

    function reducer(state: any,action: any){
        switch(action.type){
            case 'Increment':
                return {count : state.count + 1};
            case 'Decrement':
                return {count : state.count - 1};

            default:
                throw new Error()
        }
    } 


  const UseReducer = () => {

    const[state,disptch] = useReducer(reducer,initalState);


  return (
    <div>
        <p>Counter : {state.count}</p>
        <button onClick={() => disptch({type: 'Increment'})}>Increment</button>
        <button onClick={() => disptch({type: 'Decrement'})}>Decrement</button>
    </div>
  )
}

export default UseReducer