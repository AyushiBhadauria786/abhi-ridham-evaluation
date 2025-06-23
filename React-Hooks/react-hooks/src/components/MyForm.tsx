import React, { useId } from 'react'


const MyForm: React.FC = () => {
    const usernameId = useId()
    const passwordId = useId()

    console.log(usernameId)
    console.log(passwordId)

  return (
    <div>
        <form>
        <label htmlFor={usernameId}>Username:</label>
        <input type="text" id={usernameId} />

        <label htmlFor={passwordId}>Password:</label>
        <input type="password" id={passwordId} />

        </form>
    </div>
  )
}

export default MyForm;