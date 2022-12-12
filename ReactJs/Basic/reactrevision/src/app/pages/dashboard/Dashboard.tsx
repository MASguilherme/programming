import { useState, useCallback } from "react";

import {ITarefa } from '../../shared/services/api/tarefas/TarefaService';

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const currentValue = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldLista) => {
          if (oldLista.some((listItem) => listItem.item === currentValue)) {
            alert("Valor já foi adicionado!");
            return oldLista;
          }
          return [
            ...oldLista,
            {
              item: currentValue,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Lista</h2>
      <p>
        Itens selecionados:{" "}
        {lista.filter((listItem) => listItem.isCompleted).length}
      </p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((listItem, index) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsCompleted =
                        oldListItem.item === listItem.item
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;
                      return {
                        ...oldListItem,
                        isCompleted: newIsCompleted,
                      };
                    });
                  });
                }}
              />
              {listItem.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
