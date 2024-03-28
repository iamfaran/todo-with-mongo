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

export const TodoContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
