import connectDB from "@/config/database";
import Todo from "@/models/Todo";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/todos

export async function GET(request: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Get current user session id from get session user
    const sessionUser = await getSessionUser();

    if (!sessionUser) {
      return new Response(JSON.stringify({ message: "Not Authenticated" }), {
        status: 401,
      });
    }

    const sessionUserId = (sessionUser?.user as any).id;
    console.log("sessionUser", sessionUserId);

    // Fetch all todos for the current user
    const todos = await Todo.find({ user: sessionUserId });
    console.log(todos);

    // Return Response
    return new Response(JSON.stringify(todos), {
      status: 200,
    });
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Return a 500 status and the error message
    return new Response(JSON.stringify({ message: "Failed to fetch todos" }), {
      status: 500,
    });
  }
}

// POST /api/todos

export async function POST(request: Request) {
  // Connect to the database
  await connectDB();
  // get current user session id from get session user

  const sessionUser = await getSessionUser();
  const sessionUserId = (sessionUser?.user as any).id;
  console.log("sessionUser", sessionUserId);
  const newTodoData = await request.json();
  const newTodo = new Todo({
    ...newTodoData,
    user: sessionUserId,
  });
  await newTodo.save();
  // return Response with the new todo
  return new Response(JSON.stringify(newTodo), {
    status: 201,
  });
}

// DELETE /api/todos

export async function DELETE(request: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Get the id from the request body
    const { id } = await request.json();

    // Delete the todo with the given id
    const result = await Todo.findByIdAndDelete(id);

    // If no todo was found with the given id, throw an error
    if (!result) {
      throw new Error("Todo not found");
    }

    // Return a 200 status and a success message
    return new Response(
      JSON.stringify({ message: "Todo Deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    // Return a 500 status and the error message
    return new Response(JSON.stringify({ message: "Failed to delete Todo" }), {
      status: 500,
    });
  }
}

// PATCH /api/todos
// PATCH /api/todos/[id]

export async function PATCH(request: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Get the user from the session
    const sessionUser = await getSessionUser();

    if (!sessionUser) {
      return new Response(JSON.stringify({ message: "Not Authenticated" }), {
        status: 401,
      });
    }

    const sessionUserId = (sessionUser?.user as any).id;

    // Get the id from the request parameters (dynamic route)
    const { id: todoId, isCompleted } = await request.json();
    // Find the todo to update and check if it belongs to the current user
    const todoToUpdate = await Todo.findOne({
      _id: todoId,
      user: sessionUserId,
    });

    if (!todoToUpdate) {
      return new Response(
        JSON.stringify({ message: "Todo not found or unauthorized" }),
        {
          status: 404,
        }
      );
    }

    todoToUpdate.isCompleted = isCompleted;
    await todoToUpdate.save();

    // Return a 200 status and the updated todo
    return new Response(JSON.stringify(todoToUpdate), {
      status: 200,
    });
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Return a 500 status and the error message
    return new Response(JSON.stringify({ message: "Failed to update todo" }), {
      status: 500,
    });
  }
}
