import { useReducer } from "react";
import { data } from "@/utils/todos";
import { Todo } from "@/utils/types";

type State = {
  todos: Todo[];
};

type Action = {
  type: "ADD_TODO" | "CHECK_TODO" | "DELETE_TODO";
  payload?: Todo;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload!],
      };
    case "CHECK_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload!.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload!.id),
      };
    default:
      return state;
  }
};
