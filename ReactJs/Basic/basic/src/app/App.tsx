import { UsuarioLogadoProvider } from "./shared/contexts";
import { AppRoutes } from "./pages/routes/index";
export const App = () => {
  return (
    <div>
      <UsuarioLogadoProvider>
        <AppRoutes />
      </UsuarioLogadoProvider>
    </div>
  );
};
