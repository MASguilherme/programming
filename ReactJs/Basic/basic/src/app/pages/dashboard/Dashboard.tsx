import { useCallback, useEffect, useState } from "react";


import { ApiException } from "../../shared/services/api/ApiException";
import { IListItem, TasksService } from "../../shared/services/api/tasks/TasksService";

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  useEffect(()=>{
    TasksService.getAll()
    .then((result) =>{
      if(result instanceof ApiException){
        alert(result.message);
      }else{
        setLista(result);
      }
    });  
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldLista) => {
          if (oldLista.some((listItem) => listItem.title === value))
            return oldLista;
          return [
            ...oldLista,
            {
              id: oldLista.length,
              title: value,
              isSelected: false,
            },
          ];
        });
      }
    }, []);
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
                  onChange={() => {
                    setLista((oldLista) => {
                      return oldLista.map((oldListItem) => {
                        const newIsSelected =
                          oldListItem.title === listItem.title
                            ? !oldListItem.isSelected
                            : oldListItem.isSelected;
                        return {
                          ...oldListItem,
                          isSelected: newIsSelected,
                        };
                      });
                    });
                  }}
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
