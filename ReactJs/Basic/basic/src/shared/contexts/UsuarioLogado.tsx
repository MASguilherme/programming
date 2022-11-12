import { createContext } from "react";

interface InUsuarioLogadoContextData {
  nomeDoUsuario: string;
}
interface UsuarioLogadoProviderProps {
  children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<InUsuarioLogadoContextData>(
  {} as InUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({
  children,
}) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Guilherme" }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
