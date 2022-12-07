import { createContext, useCallback } from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
  
  const handleLogout = useCallback(() =>{
    console.log("logout realizado!");
  }, []);
  
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Guilherme", logout: handleLogout }}>
        {children}
    </UsuarioLogadoContext.Provider>
  );
};
