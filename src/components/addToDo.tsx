import { Dispatch, RefObject, SetStateAction } from "react";
import { IToDoItem } from "./todoItem";
import { ulid } from "ulidx";

type Props = {
  tasks: IToDoItem[];
  setTasks: Dispatch<SetStateAction<IToDoItem[]>>;
  inputRef: RefObject<HTMLInputElement>;
};

export default function AddToDoItem({ tasks, setTasks, inputRef }: Props) {
  function handleClick() {
    if (inputRef.current) {
      const taskName: string = inputRef.current.value;
      tasks.push({ isDone: false, text: taskName, id: ulid() });
      console.log(tasks);
      setTasks([...tasks]);
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
