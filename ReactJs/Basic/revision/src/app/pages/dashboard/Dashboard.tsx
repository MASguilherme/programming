import { Link } from "react-router-dom";

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
  return (
    <div>
      <h1>Dashboard</h1>
      <DashButton />
      <DashLink />
    </div>
  );
};
