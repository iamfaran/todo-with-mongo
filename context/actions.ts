import { Todo } from "@/utils/types";
export type SetTodosAction = {
  type: "SET_TODOS";
  payload: Todo[];
};

export type AddTodoAction = {
  type: "ADD_TODO";
  payload: Todo;
};

export type CheckTodoAction = {
  type: "CHECK_TODO";
  payload: string; // assuming payload is the id of the todo
};

export type DeleteTodoAction = {
  type: "DELETE_TODO";
  payload: string; // assuming payload is the id of the todo
};

export type Action =
  | SetTodosAction
  | AddTodoAction
  | CheckTodoAction
  | DeleteTodoAction;
