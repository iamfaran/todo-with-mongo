import connectDB from "@/config/database";
import Todo from "@/models/Todo";

// GET /api/todos

export async function GET(request: Request) {
  // Connect to the database
  await connectDB();

  // Fetch all todos
  const todos = await Todo.find();

  // Return Response
  return new Response(JSON.stringify(todos), {
    status: 200,
  });
}
