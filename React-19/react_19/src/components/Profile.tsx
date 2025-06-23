import React, { useEffect, useState } from 'react'

const Profile: React.FC = () => {
    const[user, setUser] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            setUser({ name: 'John Doe', age: 30 })
        },2000)
    },[])

    if(!user){
        return <div>Loading user data.....</div>
    }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default Profile;
