import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode;
}

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({
  children,
}) => {
  const [nome, setNome] = useState("");

  useEffect(() => {
    setNome('Guilherme');
  }, [nome]);

  const handleLogout = useCallback(() => {
    console.log("logout realizado!");
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{
        nomeDoUsuario: nome,
        logout: handleLogout,
      }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
