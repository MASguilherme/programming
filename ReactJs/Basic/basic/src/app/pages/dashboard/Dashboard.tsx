import { useCallback, useEffect, useState } from "react";

import { ApiException } from "../../shared/services/api/ApiException";
import {
  IListItem,
  TasksService,
} from "../../shared/services/api/tasks/TasksService";

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  useEffect(() => {
    TasksService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;
          const value = e.currentTarget.value;

          e.currentTarget.value = "";

          if (lista.some((listItem) => listItem.title === value)) return;

          TasksService.create({
            title: value,
            isSelected: false,
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
      const taskUpdate = lista.find((tarefa) => tarefa.id === id);
      if (!taskUpdate) return;

      TasksService.updateById(id, {
        ...taskUpdate,
        isSelected: !taskUpdate.isSelected,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista((oldLista) => {
            return oldLista.map((oldListItem) => {
              if(oldListItem.id === id) return result;
              return oldListItem;
            });
          });
        }
      });
    },
    [lista]
  );

  return (
    <div>
      <h1>Dashboard!</h1>
      <div>
        <input onKeyDown={handleInputKeyDown} />
        <p>Lista</p>
        <p>
          {lista.filter((listItem) => listItem.isSelected).length} Items
          checados.
        </p>
        <ul>
          {lista.map((listItem) => {
            return (
              <li key={listItem.id}>
                <input
                  type="checkbox"
                  checked={listItem.isSelected}
                  onChange={() => handleToggleComplete(listItem.id)}
                />
                {listItem.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
