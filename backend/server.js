import express, { urlencoded } from 'express';
import cors from 'cors';
import { dbConnection } from './database/db.js';
import todoRouter from './routes/todoRouter.js';
import { Todo } from './models/todoSchema.js';
const app =  new express();
const port = 4500


app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.delete('/delete/:id',async (req,res) => {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    if(!todo){
        return res.status(404).json({
            message: "No Todo Present"
        })
    }
    await todo.deleteOne();
    return res.status(200).json({
        message:"Todo Deleted Successfully"
    })
})
app.use('/api/v1/todos',todoRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


dbConnection();