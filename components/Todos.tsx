"use client";
import { useContext } from "react";
import { useTodoContext } from "@/hooks/useTodoContext";
import { Row } from "./Row";
import { AddTodo } from "./AddTodo";

export const Todos = () => {
  console.log("Todos component rendered");
  const { state, dispatch } = useTodoContext();
  const { todos } = state;
  return (
    <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
        <div className="flex justify-between">
          <h1 className="font-medium dark:text-white">Todo App</h1>
        </div>
        <AddTodo />
        <div className="h-80 overflow-x-hidden overflow-y-auto todo-list">
          {todos.map((todo) => <Row key={todo.id} {...todo} />).reverse()}
        </div>
      </div>
    </section>
  );
};
