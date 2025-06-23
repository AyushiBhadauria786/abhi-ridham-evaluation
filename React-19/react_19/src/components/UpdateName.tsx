// import React, { useActionState } from 'react'

// const UpdateName = ({name, setName}) => {

//     const [error, submitAction, isPending] = useActionState(
//         async(previousState,formData) => {
//             const error = await updateName(formData.get("name"));
//             if(error){
//                 return error;
//             }
//             redirect("/path");
//             return null;
//         },
//         null,
//     )

//   return (
//     <div>
//       <form action={submitAction}>
//         <input type="text" name="name"/>
//         <button type="submit" disabled={isPending}>Update</button>
//         {error && <p>{error}</p>}
//       </form> 
//     </div>
//   )
// }

// export default UpdateName
