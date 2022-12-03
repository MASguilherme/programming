interface IInputLoginProps {
  label?: string;
  value: string;
  type?: string;  
  setValue: (newValue: string) => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
  return (
    <label>
      <span>{props.label}</span>
      <input value={props.value} onChange={(e) => props.setValue(e.target.value)} type={props.type} />
    </label>
  );
};
