import connectDB from "@/config/database";
import Todo from "@/models/Todo";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/todos

export async function GET(request: Request) {
  // Connect to the database
  await connectDB();

  const testSession = await getSessionUser();
  console.log(" testSession: ", testSession);

  // Fetch all todos
  const todos = await Todo.find();
  console.log(todos);

  // Return Response
  return new Response(JSON.stringify(todos), {
    status: 200,
  });
}

// POST /api/todos

export async function POST(request: Request) {
  // Connect to the database
  await connectDB();
  const newTodoData = await request.json();
  const newTodo = new Todo(newTodoData);
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
