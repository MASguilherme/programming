interface InInputLoginProps {
  label: string;
  value: string;

  onChange: (newValue: string) => void;
  onPressEnter: () => void;
}

export const InputLogin: React.FC<InInputLoginProps> = (props) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? props.onPressEnter() : undefined
        }
      />
    </label>
  );
};
