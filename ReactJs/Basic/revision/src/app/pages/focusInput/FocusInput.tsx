import {useRef} from 'react';

export const FocusInput = () => {
  const inputTextFocus = useRef<HTMLInputElement>(null);

  const InputFocusText = () => {
    if (inputTextFocus.current !== null) {
      inputTextFocus.current.focus();
    }
  };

  const counterRef = useRef({counter: 0});

  const Count = () =>{
    return console.log(counterRef.current.counter++);
  }

  return (
    <div>
      <input type="text" ref={inputTextFocus} />
      <button
        type="button"
        onClick={InputFocusText}
        onKeyDown={(e) =>
          e.key === "Enter" ? inputTextFocus.current?.focus() : undefined
        }
      >
        Clique para focus
      </button>
      <br />
      <p>Contador: {counterRef.current.counter}</p>
      <button type="button" onClick={Count}>Console Log</button>
    </div>
  );
};
