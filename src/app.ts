import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Use the routes
app.use(bodyParser.json());

app.use(todoRoutes);

// Error handling middleware (optional)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

// Start the server
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
