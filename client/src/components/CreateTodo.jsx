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
        console.log("Todo Created",error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}>Create</button>
    </>
  );
}

export default CreateTodo;
