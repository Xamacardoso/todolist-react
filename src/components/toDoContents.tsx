"use-client";

import { useRef, useState } from "react";
import AddToDoItem from "./addToDo";
import { IToDoItem } from "./todoItem";
import Task from "./todoItem";
import { ULID } from "ulidx";

export default function ToDoContents() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IToDoItem[]>([]);
  function handleDeletion(id:ULID) {
    const newData = data.filter((item)=>item.id !== id)
    setData(newData)
  }
  return (
    <>
      <AddToDoItem inputRef={inputRef} tasks={data} setTasks={setData} />
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {data.length > 0 ? (
          data.map((a) => <Task handleDelete={handleDeletion} key={a.id} toDoItem={a} />)
        ) : (
          <p>Sem nada</p>
        )}
      </div>
    </>
  );
}
