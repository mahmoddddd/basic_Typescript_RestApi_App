import exp from "constants";
import express from "express";
import bodyParser from "body-parser";
const app = express();

import todoList from "./routes/todos";
app.use(todoList);
app.use(bodyParser.json());
app.listen(3000);
