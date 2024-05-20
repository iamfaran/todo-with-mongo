import { Todo } from "@/utils/types";
import { useTodoContext } from "@/hooks/useTodoContext";

export const Row = (todo: Todo) => {
  const { dispatch } = useTodoContext();
  const { _id, task, isCompleted } = todo;
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/todos`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id }),
      });

      if (!response.ok) {
        throw new Error("Todo deletion failed");
      }
      console.log("Todo deleted successfully", response);
      // Handle success (e.g., update UI if needed)
      dispatch({ type: "DELETE_TODO", payload: _id });
    } catch (error) {
      console.error("Error deleting todo:", error);
      // Handle error (display error message to the user)
    }
  };
  const handleCheck = async () => {
    // dispatch({ type: "CHECK_TODO", payload: _id });
    try {
      const response = await fetch(`/api/todos`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id, isCompleted: !isCompleted }), // Pass both id and new isCompleted
      });

      if (!response.ok) {
        throw new Error("Failed to update todo status");
      }

      dispatch({ type: "CHECK_TODO", payload: _id });
    } catch (error) {
      console.error("Error updating todo:", error);
      // (Optional) Display an error message to the user
    }
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
