
import React, { type FC } from "react";

type User = {
    id: number;
    name: string;
}

const ServerUserList: React.FC = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    return(
        <div>
            <h2>User List (Server)</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServerUserList;

