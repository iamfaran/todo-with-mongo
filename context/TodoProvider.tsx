"use client";
import { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "@/context/reducer";
import { State } from "@/context/reducer";
import { Action } from "@/context/actions";
import { Todo } from "@/utils/types";

type TodoProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  todos: [],
  loading: true,
};

export type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  console.log("TodoProvider");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("state", state);
  useEffect(() => {
    const fetchTodos = async () => {
      // SHOW LOADER FIRST
      dispatch({ type: "LOADING" });
      const response = await fetch("api/todos");
      const data: Todo[] = await response.json();
      // Remove loader after fetching data
      dispatch({ type: "SET_TODOS", payload: data });
    };

    fetchTodos();
  }, []);
  const value: TodoContextType = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
