import { useCallback, useState } from "react";

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(["Teste 1", "Teste 2"]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        const value = e.currentTarget.value;

        e.currentTarget.value = '';

        setLista((oldLista) => {
          if(oldLista.includes(value)) return oldLista;
          return [...oldLista, value];
        });
      }
    }, []);
  return (
    <div>
      <h1>Dashboard!</h1>
      <div>
        <input onKeyDown={handleInputKeyDown} />
        <p>Lista</p>
        <ul>
          {lista.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
