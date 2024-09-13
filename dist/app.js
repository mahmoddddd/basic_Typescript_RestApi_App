"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Middleware to parse incoming JSON request bodies
app.use(express_1.default.json());
// Use the routes
app.use(body_parser_1.default.json());
app.use(todos_1.default);
// Error handling middleware (optional)
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
