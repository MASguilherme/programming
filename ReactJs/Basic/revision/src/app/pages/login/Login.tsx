import { useState, useMemo, useCallback, useRef } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

  const handleLogin = useCallback(() => {
    console.log("Dados enviados: E-mail: " + email + " Senha: " + password);
  }, [email, password]);

  const inputTextFocus = useRef<HTMLInputElement>(null);

  const InputFocus = () => {
    if (inputTextFocus.current !== null) {
      inputTextFocus.current.focus();
    }
  };

  return (
    <div>
      <p>Quantidade de caracteres do e-mail: {emailLength}</p>
      <form>
        <label>
          <span>E-mail: </span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>

      <br />
      <div>
        <input type="text" ref={inputTextFocus} />
        <button
          type="button"
          onClick={InputFocus}
          onKeyDown={(e) =>
            e.key === "Enter" ? inputTextFocus.current?.focus() : undefined
          }
        >
          Clique para focus
        </button>
      </div>
    </div>
  );
};
