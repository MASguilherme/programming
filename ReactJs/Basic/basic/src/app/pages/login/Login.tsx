// Externo
import { useState, useMemo, useCallback, useRef } from "react";
// Interno
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  // start
  const inputPassword = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(`email: ${email} e senha: ${password}`);
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Número de caracteres do e-mail: {emailLength}</p>
        <InputLogin 
            label="Email:"
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPassword.current?.focus()}
        />
        <InputLogin 
          label="Senha:"
          value={password}
          type="password"
          ref={inputPassword}
          onChange={newValue => setPassword(newValue)}
        />
        <button type="button" onClick={handleEntrar}>
          Enviar
        </button>
      </form>
    </div>
  );
};
