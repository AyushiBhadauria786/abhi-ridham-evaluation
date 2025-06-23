import React, { useState, useTransition, type ChangeEvent } from 'react'

interface Item {
    id: number;
    name: string;
}

const generateItems = (count: number, prefix: number): Item[] => {
    const items: Item[] = [];
    for(let i = 0; i < count; i++){
        items.push({id: 1, name: `${prefix} Item ${i}`});
    }
    return items;
}

const GenerateValue: React.FC = () => {
    const[inputValue, setInputValue] = useState<string>('');
    const[items,setItems] = useState<Item[]>([]);
    const[isPending, startTransition] = useTransition();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue);
        
        startTransition(() => {
            setItems(generateItems(1000,newValue));
        })  
    }


  return (
    <div>
        <h1>useTransition Example</h1>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Type to filter Items...' />
        {isPending && <p>Loading Items....</p>}
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default GenerateValue