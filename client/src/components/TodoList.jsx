import axios from "axios";
import React, { useEffect, useState } from "react";
import { todoAtom } from "../store/atoms/todo";
import { useRecoilState } from "recoil";

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoAtom);

  useEffect(() => {
    const fetchTodo = async () => {
      const result = await axios.get(
        "http://localhost:4500/api/v1/todos/getTodos",
        {
          withCredentials: true,
        }
      );
      console.log(result.data.todos);
      setTodos(result.data.todos);
    };
    fetchTodo();
  }, []);

  function inputHandler(todoID, field, value) {
    setTodos((fromAlltodos) =>
      fromAlltodos.map((particularTodo) =>
        todoID === particularTodo._id
          ? { ...particularTodo, [field]: value }
          : particularTodo
      )
    );
  }

  const updateTodo = async (todoId) => {
    const updatedTodo = todos.find((todo) => todo._id === todoId);
    await axios
      .put(
        `http://localhost:4500/api/v1/todos/updateTodo/${todoId}`,
        updatedTodo,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="mb-4 p-4 border rounded shadow-sm">
            <input
              type="text"
              placeholder="Enter Title"
              value={todo.title}
              onChange={(e) => {
                inputHandler(todo._id, "title", e.target.value);
              }}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter Description"
              value={todo.description}
              onChange={(e) => {
                inputHandler(todo._id, "description", e.target.value);
              }}
              className="w-full mb-2 p-2 border rounded"
            />
            <button
              onClick={() => updateTodo(todo._id)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
