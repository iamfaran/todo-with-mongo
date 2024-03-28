"use client";
import React, { FormEvent, ChangeEvent, useState, use } from "react";
import { useContext } from "react";
import { TodoContext, TodoContextType } from "@/context/TodoProvider";
import { Row } from "./Row";
import { AddTodo } from "./AddTodo";

export const Todos = () => {
  console.log("Todos component rendered");
  const { state, dispatch } = useContext<TodoContextType | null>(TodoContext)!;

  // initialize task state with an empty string
  const [task, setTask] = useState<string>("");

  return (
    <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
        <div className="flex justify-between">
          <h1 className="font-medium dark:text-white">Todo App</h1>
        </div>
        <AddTodo />
        <div className="h-80 overflow-x-hidden overflow-y-auto todo-list">
          {/* {todos
            .map((todo) => (
              <Row
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleCheckTodo={handleCheckTodo}
              />
            ))
            .reverse()} */}
        </div>
      </div>
    </section>
  );
};
