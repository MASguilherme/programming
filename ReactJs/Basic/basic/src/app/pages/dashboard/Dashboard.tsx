import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  const { nomeDoUsuario, logout } = useUsuarioLogado();

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
      <button onClick={logout}>Logout</button>
    </div>
  );
};
