import { Todo } from "../models/todoSchema.js";

export const postTodo = async (req, res) => {
    const {title,description} = req.body;
    const todo = await Todo.create({
        title:title,
        description:description
    })
    return res.status(200).json({
        todo,
        message:"Todo created"
    })
};
export const getAllTodo = async (req, res) => {
  const todos = await Todo.find({});
  return res.status(200).json({
      todos,
      message:"All todos"
  })
};


export const updateTodo = async (req,res) => {

  const { title, description } = req.body;

  if (!title && !description) {
    return res.status(400).json({message:"No values"})
  }

  const {id} = req.params;

  const updatedTodo = await Todo.findByIdAndUpdate(id,{
    $set:{
      title:title,
      description:description
    }
  },{new:true})

  return res.status(200).json({
    updatedTodo,
    message:"Todo Updated"
  })
}

export const deleteTodo = async (req,res) => {

  const {id} = req.params;
  const todo = await Todo.findById(id);
  if(!todo){
    return res.status(400).json({
      message:"There is no such Todo"
    })
  }

  await todo.deleteOne();
  return res.status(200).json({
    message:"todo deleted"
  })

}