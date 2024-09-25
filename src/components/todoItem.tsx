// usa o componente do cliente, pra nao usar o que é renderizado pelo server
// o lado do cliente é modificável, diferente do server-side
"use client";

import { useState } from "react";

export interface IToDoItem {
    text: string,
    isDone: boolean
}

interface props {
    toDoItem:IToDoItem
}

export default function ToDoItem({toDoItem}:props) {
  // State e setador de state, vc seta um state e o tipo dele pra usar com as coisas
  const [made, setMade] = useState<boolean>(toDoItem.isDone);

  return (
    <div className="flex space-x-2">
      <p className={`${made && "line-through"}`}>Tarefa: {toDoItem.text}</p>
      <input
        type="checkbox"
        // checked={made}
        defaultChecked={made}

        onChange={() => {
          setMade(!made);
        }}
      ></input>
    </div>
  );
}
