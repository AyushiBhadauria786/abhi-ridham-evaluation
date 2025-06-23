type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>
        {label}:&nbsp;
        <input {...props} />
      </label>
    </div>
  );
};

export default FormInput;