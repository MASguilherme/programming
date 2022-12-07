import { Link } from "react-router-dom";

import { useUsuarioLogado } from "../../shared/hooks";

export const DashSpan = () => {
  return (
    <div>
      <span>Dash Button</span>
    </div>
  );
};

export const DashButton = () => {
  return (
    <button>
      <DashSpan />
    </button>
  );
};

export const DashLink = () => {
  return (
    <div>
      <Link to="/entrar">Entrar</Link>
    </div>
  );
};

export const Dashboard = () => {
  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <div>
      <h1>Dashboard</h1>
      <DashButton />
      <DashLink />
      <p>{nomeDoUsuario}</p>
      <button type="button" onClick={logout}>fazer Logout</button>
    </div>
  );
};
