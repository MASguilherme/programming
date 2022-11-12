import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { UsuarioLogadoContext } from "../../../shared/contexts";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  const {nomeDoUsuario} = useContext(UsuarioLogadoContext);

  return (
    <div>
      <p>Dashboard!</p>
      <p>Nome do Usuário via Context: {nomeDoUsuario}</p>
      <Link to="/entrar">Login</Link>

      <br />
      <p>contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Clicar</button>
      <button onClick={() => console.log(counterRef.current.counter++)}>
        Console Log
      </button>
    </div>
  );
};
