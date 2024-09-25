import { IToDoItem } from "./todoItem";

type Props = {
  tasks: IToDoItem[];
};
export default function addToDoItem({ tasks }: Props) {
  return (
    <div className="flex justify-center mt-10 gap-4">
      <input
        className="pl-8 text-black"
        type="text"
        placeholder="Adicionar nova tarefa"
      />
      <button className="hover:text-black hover:bg-white">Submeter</button>
    </div>
  );
}
