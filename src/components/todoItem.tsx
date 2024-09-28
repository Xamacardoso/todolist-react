// usa o componente do cliente, pra nao usar o que é renderizado pelo server
// o lado do cliente é modificável, diferente do server-side
"use client";

import { useState } from "react";
import { ULID } from "ulidx"; // Identificadores de tasks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

// Interface de um item task
export interface IToDoItem {
  text: string;
  isDone: boolean;
  id: ULID;
}

// Props de uma task
interface props {
  toDoItem: IToDoItem;
  handleDelete: (id: ULID) => void;
}

// Item de task
export default function ToDoItem({ toDoItem, handleDelete }: props) {
  // State e setador de state, vc seta um state e o tipo dele pra usar com as coisas
  const [made, setMade] = useState<boolean>(toDoItem.isDone);

  return (
    <div className="pb-1.5 flex space-x-2 justify-between">
      <div className="flex space-x-2">
        <input
          type="checkbox"
          defaultChecked={made}
          onChange={() => {
            setMade(!made);
          }}
        ></input>
        <p className={`flex-wrap ${made && "line-through"}`}>Tarefa: {toDoItem.text}</p>
      </div>
      <div className="flex space-x-2">
        <button>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button onClick={() => handleDelete(toDoItem.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
