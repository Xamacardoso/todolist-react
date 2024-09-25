"use client";
import Task, { IToDoItem } from "@/components/todoItem";
//import AddTask from "@/components/addToDo";
import { useRef, useState } from "react";
// Array pra guardar as props de cada um, pra facilitar a inserção.

export default function Home() {
  //const data: IToDoItem[] = [
  // { isDone: true, text: "Lavar os pratos" },
  // { isDone: false, text: "Estudar" },
  // { isDone: true, text: "Ler" },
  //];

  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IToDoItem[]>([]);
  function handleClick() {
    if (inputRef.current) {
      const taskName: string = inputRef.current.value;
      //const newData = [...data];
      data.push({ isDone: false, text: taskName });
      console.log(data);
      setData([...data]);
    }
  }

  return (
    <>
      <div className="flex justify-center mt-10 gap-4">
        <input
          ref={inputRef}
          className="pl-8 text-black"
          type="text"
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          placeholder="Adicionar nova tarefa"
        />
        <button
          onClick={handleClick}
          className="hover:text-black hover:bg-white"
        >
          Submeter
        </button>
      </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {data.length > 0 ? (
          data.map((a, index) => <Task key={index} toDoItem={a} />)
        ) : (
          <p>Sem nada</p>
        )}
      </div>
    </>
  );
}
