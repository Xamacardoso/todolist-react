// usa o componente do cliente, pra nao usar o que é renderizado pelo server
// o lado do cliente é modificável, diferente do server-side
"use client";

import { faCheck, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ULID } from "ulidx"; // Identificadores de tasks

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
  editUpdate: (id: ULID, task: IToDoItem) => void; 
}

// Item de task
export default function ToDoItem({ toDoItem, handleDelete, editUpdate }: props) {
  // State e setador de state, vc seta um state e o tipo dele pra usar com as coisas
  const [made, setMade] = useState<boolean>(toDoItem.isDone);
  const [editing, setEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(toDoItem.text);

  function handleEdition(){
    setEditing(true);
  }

  function saveEdition(){
    setEditing(false);
    editUpdate(toDoItem.id, {...toDoItem, text: inputValue})
  }

  return (
    <div className="pb-1.5 flex space-x-2 justify-between">
      <p className="text-white">{String(made)}</p>
      <div className="flex space-x-2">
        {editing ? (
          <input
            value={inputValue}
            className="rounded placeholder-slate-500 text-red-500 pl-2"
            placeholder="Novo nome da tarefa"
            onChange={(e)=>{setInputValue(e.currentTarget.value)}}
          ></input>
        ) : (
          <>
            <input
              type="checkbox"
              defaultChecked={made}
              onClick={() => {
                setMade(!made);
                console.log("Minha tarefa está feita: ", made)
                editUpdate(toDoItem.id, {...toDoItem, isDone: made}) 
              }}
            ></input>
            <p className={`flex-wrap ${made && "line-through"}`}>
              Tarefa: {toDoItem.text}
            </p>
          </>
        )}
      </div>
      <div className="flex space-x-2">
        {editing ? (
          <button className="mr-8">
            <FontAwesomeIcon
              className="transition-colors duration-300 bg-purple-600 px-1.5 py-1 rounded hover:bg-white hover:text-black"
              icon={faCheck}
              onClick={()=>{saveEdition()}}
            />
          </button>
        ) : (
          <>
            <button onClick={() => {handleEdition()}}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => handleDelete(toDoItem.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
