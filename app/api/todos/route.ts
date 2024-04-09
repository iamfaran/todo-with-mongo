import connectDB from "@/config/database";
import Todo from "@/models/Todo";

// GET /api/todos

export async function GET(request: Request) {
  // Connect to the database
  await connectDB();

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
