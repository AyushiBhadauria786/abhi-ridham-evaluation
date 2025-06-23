//  Server Component 



import React, { useState } from 'react';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return res.json();
}

export default async function ServerComponent() {
  const data = await getData();

  return (
    <div>
      <h1>Server Component</h1>
      <p>{data.title}</p>
    </div>
  );
}



// Client Component 


// 'use client'; 


// export default function ClientButton() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Clicked {count} times
//     </button>
//   );
// }