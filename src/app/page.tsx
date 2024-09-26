"use client";
import AddToDoItem from "@/components/addToDo";
import ToDoContents from "@/components/toDoContents";
import Task, { IToDoItem } from "@/components/todoItem";
//import AddTask from "@/components/addToDo";
import { useRef, useState } from "react";
// Array pra guardar as props de cada um, pra facilitar a inserção.

export default function Home() {
  return (
   <ToDoContents/>
  );
}
