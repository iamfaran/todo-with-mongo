import { useContext } from "react";
import { TodoContext, TodoContextType } from "@/context/TodoProvider";

export function useTodoContext(): TodoContextType {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
}
