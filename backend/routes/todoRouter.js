import express from "express";
import { deleteTodo, getAllTodo, postTodo, updateTodo } from "../controllers/todoControllers.js";

const router = express.Router();

router.post("/createTodo",postTodo);
router.get("/getTodos",getAllTodo);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

export default router;