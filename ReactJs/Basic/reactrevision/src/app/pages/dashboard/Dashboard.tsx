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

  const handleToggleComplete = useCallback(
    (id: number) => {
      const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);

      if (!tarefaToUpdate) return;

      TarefaService.updateById(id, {
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista((oldLista) => {
            return oldLista.map((oldListItem) => {
              if (oldListItem.id === id) return result;
              return oldListItem;
            });
          });
        }
      });
    },
    [lista]
  );

  const handleDeleteItem = useCallback(
    (id: number) => {
      TarefaService.deleteById(id).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista((oldLista) => {
            return oldLista.filter((oldListItem) => oldListItem.id !== id);
          });
        }
      });
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
        {lista.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  handleToggleComplete(listItem.id);
                }}
              />
              {listItem.item}
              <button
                type="button"
                onClick={() => handleDeleteItem(listItem.id)}
              >
                 Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
