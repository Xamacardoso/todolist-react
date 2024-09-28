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
      if (taskName === ''){return};
      const newTask: IToDoItem = { isDone: false, text: taskName, id: ulid() };
      setTasks((prevTasks)=>[...prevTasks, newTask]);
      console.log(tasks);
      inputRef.current.value = "";
    }
  }
  return (
    <div className="flex mt-10 gap-2">
      <input
        ref={inputRef}
        className="pl-8 text-white bg-transparent border-white border rounded-md placeholder-stone-500 placeholder-opacity-80 focus:placeholder-opacity-50"
        type="text"
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleClick} className="px-2 transition-colors duration-300 bg-purple-600 rounded hover:text-black hover:bg-white ">
        Submeter
      </button>
    </div>
  );
}
