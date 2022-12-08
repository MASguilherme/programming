import { useState, useCallback } from "react";

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const currentValue = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldLista) => {
          if (oldLista.includes(currentValue)) {
            alert('Valor já foi adicionado!');
            return oldLista;
          }
          return [...oldLista, currentValue];
        });
      }
    }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Lista</h2>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((value, index) => {
          return <li>{value}</li>;
        })}
      </ul>
    </div>
  );
};
