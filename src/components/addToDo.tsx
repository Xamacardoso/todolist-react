"use client" // add

import { Dispatch, RefObject, SetStateAction } from "react";
import { IToDoItem } from "./todoItem";
import { ulid } from "ulidx";

// Props do adicionador
type Props = {
  tasks: IToDoItem[]; // Array de tasks
  setTasks: Dispatch<SetStateAction<IToDoItem[]>>;
  inputRef: RefObject<HTMLInputElement>;
};

// Barra de adicionar tasks
export default function AddToDoItem({ tasks, setTasks, inputRef }: Props) {
  function handleClick() {
    if (inputRef.current) {
      const taskName: string = inputRef.current.value;
      const newTask: IToDoItem = { isDone: false, text: taskName, id: ulid() };
      setTasks((prevTasks)=>[...prevTasks, newTask]);
      console.log(tasks);
      inputRef.current.value = "";
    }
  }
  return (
    <div className="flex justify-center mt-10 gap-4">
      <input
        ref={inputRef}
        className="pl-8 text-black"
        type="text"
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleClick} className="hover:text-black hover:bg-white">
        Submeter
      </button>
    </div>
  );
}
