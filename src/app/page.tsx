"use client";
import AddToDoItem from "@/components/addToDo";
import ToDoContents from "@/components/toDoContents";
import Task, { IToDoItem } from "@/components/todoItem";
//import AddTask from "@/components/addToDo";
import { useRef, useState } from "react";

export default function Home() {
  return (
   <ToDoContents/>
  );
}
