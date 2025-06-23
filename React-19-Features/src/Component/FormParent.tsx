import React, { useRef } from 'react';
import FormInput from './FormInput';

const FormParent = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';

    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React 19 Form (No forwardRef)</h2>
      <FormInput label="Name" ref={nameRef} />
      <FormInput label="Email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormParent;