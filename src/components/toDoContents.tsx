"use-client";

import { useEffect, useState } from "react";
import { ULID } from "ulidx";
import AddToDoItem from "./addToDo";
import Task, { IToDoItem } from "./todoItem";

export default function ToDoContents() {
  // Para reconhecer o input
  const [data, setData] = useState<IToDoItem[]>([]); // data é uma array de interfaces de itens de tasks

  useEffect(() => {
    // Caminho do endpoint, metodo get
    fetch("http://localhost:3000/tasks/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => setData(data));
    });
  }, []);

  // Filtra a nova array a partir de data
  function handleDeletion(id: ULID) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => {
      const newData = data.filter((item) => item.id !== id);
      response.json().then(()=>setData(newData)) // Seta data para atualizar a lista de data
    });
  }

  function handleEditing(id: ULID, updaterItem: IToDoItem) {
    // Busca o url com o id do meu item
    fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updaterItem), // Passo o meu item atualizado como body
      method: "PATCH", // Método para atualizar
    }).then((response) => {
      // Quando obtiver resposta (que pode ser um erro)
      const newData = data.map(
        (
          task // Minha nova array de data
        ) => (task.id === id ? { ...updaterItem } : task)
      );
      response.json().then(() => setData(newData)); // Atualiza localmente quando fizer a requisicao
    });
  }

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl">PINDAMONHAHNGABA TASKS</h1>
      <div>
        <AddToDoItem tasks={data} setTasks={setData} />
        <div className={`mr-2 ${!(data.length > 0) && "text-center"} min-h-screen pt-10 gap-2 font-[family-name:var(--font-geist-sans)]`}>
          {data.length > 0 ? (
            data.map((a) => (
              <Task
                editUpdate={handleEditing}
                handleDelete={handleDeletion}
                key={a.id}
                toDoItem={a}
              />
            ))
          ) : (
            <p>Sem nada</p>
          )}
        </div>
      </div>
    </div>
  );
}
