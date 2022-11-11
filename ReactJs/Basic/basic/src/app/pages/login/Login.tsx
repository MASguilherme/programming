import { useState, useEffect, useMemo, useCallback } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(()=>{
    // console.log("executou");
    return email.length;    
  }, [email.length]);

  const handleEntrar = useCallback(() =>{
    console.log(`email: ${email} e senha: ${password}`);
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Número de caracteres do e-mail: {emailLength}</p>
        <label>
          <span>E-mail:</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="button" onClick={handleEntrar}>
          Enviar
        </button>
      </form>
    </div>
  );
};
