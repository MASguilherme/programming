import React from "react";

interface InInputLoginProps {
  label: string;
  value: string;
  type?: string;
  onPressEnter?: () => void;
  onChange: (newValue: string) => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, InInputLoginProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}</span>
        <input
          ref={ref}
          value={props.value}
          type={props.type}
          onChange={(event) => props.onChange(event.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);
