import React, { useDeferredValue, useState } from 'react'



const SeachComponent = () => {
    const[query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

  return (
    <div>
    <input type="text" value={query} onChange={handleChange} placeholder='Type your search query..'
     />
     <SearchResults query={deferredQuery} />
    </div>
  )
}

export default SeachComponent;

export const SearchResults = ({ query }) => {
  const results = performSearch(query);
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  );
};

// Fake search function
export const performSearch = (query) => {
  if (!query) return [];
  const results = [
    { id: 1, name: `Result for "${query}" 1` },
    { id: 2, name: `Result for "${query}" 2` },
  ];
  return results;
};