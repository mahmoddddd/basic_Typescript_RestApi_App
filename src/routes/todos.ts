import { Router } from "express";
import { Todo } from "../models/todo";

// Define the type for the request body
interface RequestBody {
  text: string;
}

// Define the type for the request parameters
interface RequestParams {
  todoId: string;
}

// Initialize an empty array to store todos
const todos: Todo[] = [];

const router = Router();

// Get all todos
router.get("/", (req, res) => {
  res.status(200).json({ todos }); // Return all todos
});

// Create a new todo
router.post("/todo", (req, res) => {
  const { text } = req.body as RequestBody; // Type casting to RequestBody

  // Check if text is provided
  if (!text) {
    return res
      .status(400)
      .json({ message: "Text is required to create a todo." });
  }

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text,
  };

  todos.push(newTodo);
  res
    .status(201)
    .json({ message: "Todo created successfully!", todo: newTodo });
});

// Update a todo by ID
router.put("/todo/:todoId", (req, res) => {
  const { todoId } = req.params as RequestParams;
  const { text } = req.body as RequestBody; // Type casting to RequestBody

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex !== -1) {
    todos[todoIndex].text = text;
    res.status(200).json({ message: "Todo updated!", todo: todos[todoIndex] });
  } else {
    res.status(404).json({ message: "Todo not found." });
  }
});

// Delete a todo by ID
router.delete("/todo/:todoId", (req, res) => {
  const { todoId } = req.params as RequestParams;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted." });
  } else {
    res.status(404).json({ message: "Todo not found." });
  }
});

export default router;
