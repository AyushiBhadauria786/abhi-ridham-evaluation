import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


useEffect(() => {

    const FetchData = async () =>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
            if(!response.ok){
                throw new Error(`HTTP error !Status ${response.status}`)
            }
            const result = await response.json();
            setData(result)
        } catch (err:any) {
            setError(err);
        } finally{
            setLoading(false);
        }
    };

    FetchData();
},[])

if(loading){
    return <div>Loading Data.......</div>
}

if(error){
    return <div>Error : {error}</div>
}

  return (
    <div>
        <h2>Fetched Data:</h2>
        <pre>{JSON.stringify(data,null,3)}</pre>
    </div>
  )
}

export default UseEffect




