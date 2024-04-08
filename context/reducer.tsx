import { Todo } from "@/utils/types";
import { Action } from "@/context/actions";

export type State = {
  todos: Todo[];
};

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload!,
      };
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload!],
      };
    case "CHECK_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo._id === action.payload!
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload!),
      };
    default:
      return state;
  }
};
