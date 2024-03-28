"use client";
import { createContext, useReducer } from "react";
import { todoReducer } from "@/context/reducer";
import { State, Action } from "@/context/reducer";
import { data } from "@/utils/todos";

type TodoProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  todos: data,
};

export type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("TodoProvider rendered");
  const value: TodoContextType = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
