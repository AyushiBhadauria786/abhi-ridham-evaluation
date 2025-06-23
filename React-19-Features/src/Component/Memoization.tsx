import { useCallback, useState } from "react";


// react 18

// const UseCallback = () => {
  

//     const[Number,setNumber] = useState(0);
//     const[Result,setResult] = useState(0);
  
//     const Fibbo= useCallback(()=>{
//       console.log("Calculation Done",Number)
//       if (Number <= 1){ 
//         return Number;
//     }
//     let a = 0, b = 1;
//     for (let i = 2; i <=  Number; i++) {
//       let temp = a + b;
//       a = b;
//       b = temp;
//     }
//     // console.log("calculation done")
//     return b;
//     },[Number])
  
//     function handleevent(){
//       for(let i=0;i<1000000000;i++){}
//       setResult(Fibbo());
     
//     //  console.log("Calculation Done",Number)
//     }
//     return (
//       <div>
//         <input type="number" onChange={(e)=> setNumber(parseFloat(e.target.value))} />
//         <button onClick={handleevent}>Calculation</button>
//         <h1>Fibbo of Number:- {Result}</h1>
//       </div>
//     )
//   }
  
//   export default UseCallback





// React 19



const UseCallback = () => {
  const [Number, setNumber] = useState(0);
  const [Result, setResult] = useState(0);

  function Fibbo(num: number) {                          // no use useMemo
    console.log("Calculation Done", num);
    if (num <= 1) return num;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  function handleEvent() {
    for (let i = 0; i < 1000000000; i++) {} // simulate delay
    setResult(Fibbo(Number));
  }

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseFloat(e.target.value))}
      />
      <button onClick={handleEvent}>Calculation</button>
      <h1>Fibbo of Number: {Result}</h1>
    </div>
  );
};

export default UseCallback;


