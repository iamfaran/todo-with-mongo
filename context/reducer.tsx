import { Todo } from "@/utils/types";

export type State = {
  todos: Todo[];
};

export type Action = {
  type: "ADD_TODO" | "CHECK_TODO" | "DELETE_TODO";
  payload?: Todo;
};

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload!],
      };
    case "CHECK_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo._id === action.payload!._id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload!._id),
      };
    default:
      return state;
  }
};
