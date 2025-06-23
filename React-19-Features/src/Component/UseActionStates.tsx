'use client'; // This makes the component a Client Component

import { useActionState } from "react";


// async function increment(prevState: number, formData: FormData) {
//   return prevState + 1;
// }

// export default function StatefulForm() {
//   const [state, formAction] = useActionState(increment, 0);

//   return (
//     <form action={formAction}>
//       <p>Current Count: {state}</p>
//       <button type="submit">Increment</button>
//     </form>
//   );
// }




// export default function Counter  ()  {
//   const [count, dispatch] = useActionState(
//     (prevState: number, action: { type: any; }) => {
//       switch (action.type) {
//         case 'increment':
//           return prevState + 1;
//         case 'decrement':
//           return prevState - 1;
//         default:
//           return prevState;
//       }
//     },
//     0 // initial state
//   );

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// };




// async function handleFormSubmission(prevState:any,formData :any) {
//     const name = formData.get('name')
//     const count = prevState.count + 1;
//     return {count,lastSubmittedName: name}
// }


// export default function ExampleUseActionState(){
//     const [state, formAction] = useActionState(handleFormSubmission,{
//         count: 0,
//         lastSubmittedName: ''
//     })

// return(
//     <form action={formAction}>

//     <input type="text" name="name" placeholder="Enter your name"/>
//     <button type="submit">Submit</button>

//     <div style={{marginTop : '1rem'}}>
//     <p>Submission count : {state.count}</p>
//     <p>Last submitted name : {state.lastSubmittedName}</p>


//     </div>
//     </form>
// )


// }



