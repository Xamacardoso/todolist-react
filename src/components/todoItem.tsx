// usa o componente do cliente, pra nao usar o que é renderizado pelo server
// o lado do cliente é modificável, diferente do server-side
"use client";

import { useState } from "react";
import { ULID } from "ulidx";

export interface IToDoItem {
  text: string;
  isDone: boolean;
  id: ULID;
}

interface props {
  toDoItem: IToDoItem;
  handleDelete: (id:ULID)=>void;
}

export default function ToDoItem({ toDoItem, handleDelete }: props) {
  // State e setador de state, vc seta um state e o tipo dele pra usar com as coisas
  const [made, setMade] = useState<boolean>(toDoItem.isDone);



  return (
    <div className="flex space-x-2">
      <input
        type="checkbox"
        // checked={made}
        defaultChecked={made}
        onChange={() => {
          setMade(!made);
        }}
      ></input>
      <p className={`${made && "line-through"}`}>Tarefa: {toDoItem.text}</p>
      <button onClick={()=>handleDelete(toDoItem.id)}>Excluir</button>
    </div>
  );
}
