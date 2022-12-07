import { Routes } from "./routes";

import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <div>
      <UsuarioLogadoProvider>
        <Routes />
      </UsuarioLogadoProvider>
    </div>
  );
};
