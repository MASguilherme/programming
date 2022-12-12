import { useState, useCallback, useEffect } from "react";

import {
  ITarefa,
  TarefaService,
} from "../../shared/services/api/tarefas/TarefaService";
import { ApiException } from "../../shared/services/api/ApiException";

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefaService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    });
  }, [setLista]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;

          const currentValue = e.currentTarget.value;

          e.currentTarget.value = "";

          if (lista.some((listItem) => listItem.item === currentValue)) {
            alert("Valor já foi adicionado!");
          }

          TarefaService.create({
            item: currentValue,
            isCompleted: false,
          }).then((result) => {
            if (result instanceof ApiException) {
              alert(result.message);
            } else {
              setLista((oldLista) => {
                return [...oldLista, result];
              });
            }
          });
        }
      },
      [lista]
    );

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
