import { Schema, model, models } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;
