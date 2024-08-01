import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { todoTitle } from "../store/atoms/todo";

function CreateTodo() {
  const [title, setTitle] = useRecoilState(todoTitle);
  const [description, setDescription] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4500/api/v1/todos/createTodo",
        { title, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Todo Created");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log("Todo Created", error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <form onSubmit={addTodo} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateTodo;
