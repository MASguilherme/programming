import { useState, useCallback } from "react";

interface IListItem {
  item: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

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
              isSelected: false,
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
        {lista.filter((listItem) => listItem.isSelected).length}
      </p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((listItem, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.item === listItem.item
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
              {listItem.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
