import { useOptimistic, useState } from "react";

const OptimisticComponent = () => {
  const [title, setTitle] = useState("Title");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;
  const handleSubmit = async (formData:any) => {

  };
  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p> {pending && "Updating..."} </p>
      <form action={handleSubmit}>
        <input type="text" name="title" placeholder="Change Title" />
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>
      <div className="error">{error && error}</div>
    </div>
  );
};


export default OptimisticComponent;