import { useRef, useState } from "react";

export default function UseRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function Increment() {
    countRef.current++;
    setCount(count + 1);
    console.log("State count:", count);
    console.log("Count ref:", countRef);
  }

  return (
    <div className="App">
      <p>State Count is: {count}</p>
      <p>CountRef is: {countRef.current}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}


// import { useRef } from "react";

// export default function App() {
//   const countRef = useRef(0);

//   function Increment() {
//     countRef.current++;
//     console.log("Count ref:", countRef);
//   }

//   return (
//     <div className="App">
//       <p>CountRef is: {countRef.current}</p>
//       <button onClick={Increment}>Increment</button>
//     </div>
//   );
// }