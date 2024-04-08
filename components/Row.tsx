import { Todo } from "@/utils/types";
import { useTodoContext } from "@/hooks/useTodoContext";

export const Row = (todo: Todo) => {
  const { state, dispatch } = useTodoContext();
  const { _id, task, isCompleted } = todo;
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: _id });
  };

  const handleCheck = () => {
    dispatch({ type: "CHECK_TODO", payload: _id });
  };

  return (
    <div className="shadow rounded-lg p-3 mt-4 bg-gray-50 dark:bg-slate-700 flex justify-between">
      <div className="flex items-center">
        <input
          id={"task-name-" + _id}
          type="checkbox"
          onChange={handleCheck}
          checked={isCompleted}
        />
        <label
          className="ml-2 font-medium text-slate-800 dark:text-gray-50 text-sm"
          htmlFor={"task-name-" + _id}
        >
          {task}
        </label>
      </div>
      <div className="">
        <button
          className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-2 py-1 text-sm leading-5 rounded-full font-semibold text-white"
          aria-label="Delete a todo"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
    </div>
  );
};
