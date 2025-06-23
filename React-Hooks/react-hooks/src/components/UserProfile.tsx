import React, { useMemo, useState } from "react";


interface User {
    id: number;
    name: string;
}

const UserProfile: React.FC = () => {
    const[user,setUser] = useState<User | null>(null);
    const[count, setCount] = useState<number>(0);

    const squaredValue = useMemo(() => {
    return count * count;
  }, [count]);

    const fetchUser = () => {
        setTimeout(() => {
            setUser({ id: 1, name: 'Ridham' });
        },1000)
    }

    return (
        <div>
            {user ? <p>Welcome, {user.name}!</p> : <button onClick={fetchUser}>Load User</button>}
            <p>Count: {count}</p>
            <p>Squared Value: {squaredValue}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}


export default UserProfile;