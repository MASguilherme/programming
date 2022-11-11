import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEntrar = () => {
    console.log(email +" "+ password);
  };

  return (
    <div>
      <form>
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
