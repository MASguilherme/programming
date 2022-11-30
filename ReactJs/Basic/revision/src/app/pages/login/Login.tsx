import { useState, useEffect } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (window.confirm("Você é Homem?")) {
      console.log("Você é Homem!");
    } else {
      console.log("Você não é homem.");
    }
  }, []);

  useEffect(()=>{
    console.log("E-mail: " + email);
  },[email]);

  useEffect(()=>{
    console.log("Senha: " + password);
  },[password]);

  const handleLogin = () => {
    console.log("Dados enviados: E-mail: " + email + " Senha: " + password);
  };

  return (
    <div>
      <form>
        <label>
          <span>E-mail: </span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};
