interface InInputLoginProps {
  label: string;
  value: string;
  type?: string;
  ref?: string;
  onPressEnter?: () => void;
  onChange: (newValue: string) => void;
}

export const InputLogin: React.FC<InInputLoginProps> = (props) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        value={props.value}
        type={props.type}
        ref={props.ref}
        onChange={(event) => props.onChange(event.target.value)}
        onKeyDown={(event) =>
          event.key === 'Enter'
            ? props.onPressEnter && props.onPressEnter()
            : undefined
        }
      />
    </label>
  );
};
