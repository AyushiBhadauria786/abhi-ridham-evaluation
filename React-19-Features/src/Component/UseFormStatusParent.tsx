import React from "react";
import SubmitButton from "./UseFormStatusChild";


function MyForm(){

    const handleSubmit = async (formData: any) => {
        await new Promise((resolve) => setTimeout(resolve,2000));
        console.log('Form submitted with data: ', formData);
    };


    return(
        <form action={handleSubmit}>
            <input type="text" name="username" placeholder="Username"/>
            <SubmitButton/>
        </form>
    )
}


export default MyForm;