import type { Try } from '@mui/icons-material';
import React, { use, useEffect, useState } from 'react'


// // Without use hook
// // Using useEffect and UseState 

// const UseCompareUseEffect = () => {

//   const [data,setdata] = useState(null);
//   const [error,seterror] = useState(null);
//   const [loading,setloading] = useState(true);


//   useEffect(() => {

//     const fetchdata = async () => {
//     try{
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const result = await res.json();
//       setdata(result);
//     }
//       catch(err:any){
//         seterror(err.message);
//       }
//       finally {
//         setloading(false);
//       }
//     };

//     fetchdata();

//   },[])


// if(loading){
//   return <p>Loading ....</p>
// }
// if(error){
//   return <p>Error : {error}</p>
// }



//   return (
//     <div>
//       <h1>Data:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   )
// }

// export default UseCompareUseEffect;







// With use hook



'use client'; // Required if using in a Next.js Client Component


async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

const dataPromise = fetchData(); // Start fetching immediately

export default function DataFetchingComponent() {
  const data = use(dataPromise); // This will suspend until data is ready

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}





