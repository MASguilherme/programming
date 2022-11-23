import { createContext, useCallback, useEffect, useState } from "react";

interface InUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
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
  const handleLogout = useCallback(() => {
    return console.log("executou Logout");
  }, []);

  const [name, setName] = useState("Vazio");
  useEffect(() => {
    setTimeout(() => {
      setName("Guilherme");
    }, 3000);
  });

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: name, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
