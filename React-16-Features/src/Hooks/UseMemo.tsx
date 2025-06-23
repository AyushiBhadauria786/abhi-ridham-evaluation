import { useMemo, useState } from "react";

const UseMemo = () => {

    const[Number,setNumber] = useState(0);
    const[Result,setResult] = useState(0);
  
    const CubeNUM = useMemo(()=>{
      // console.log(num,"num")
    //   console.log('Calculation Done');
      return Math.pow(Number,3)
    },[Number])
    
    function handleevent(){
     setResult(CubeNUM);
    }
    console.log('Calculation Done')
    return (
      <div>
        <input type="number" onChange={(e)=> setNumber(parseFloat/*Number*/(e.target.value))} />
        {/* //<input type="number" onChange={(e)=> console.log(e)} /> */}
        <button onClick={handleevent}>Calculation</button>
        <h1>Cube of NUmber:- {Result}</h1>
      </div>
    )
  }
  
  
  export default UseMemo