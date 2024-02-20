import { createTaskSchema } from "../middleware/validate.js"
import Task from "../models/Task.js"
import { ZodError } from 'zod'

export const getTasks  = async (req,res)=>{
    const tasks = await  Task.paginate()
    res.status(200).json(tasks)
}

export const createTask = async (req, res)=>{ 
    try {
      await createTaskSchema.parse(req.body)
      const task = new Task(req.body)
      await task.save()
      res.status(201).json(task)
      res.send('createTask')
    } catch (error) {
      if(error instanceof ZodError){
        return res.status(400).json(error.issues)
      }
    }
}

export const updateTask = async (req, res)=>{
    const { title, description } = req.body
    const { id } = req.params
    await Task.findByIdAndUpdate({ _id:id }, { title, description } )
    res.status(200).json('updateTask')
}

export const deleteTask =async  (req, res)=>{
    const { id } = req.params
    await Task.deleteOne({_id: id})
    res.status(200).json({
      message: 'tasks was deleted'
    })
}

export const getTask = async (req, res)=>{
    const { id } = req.params
    const task = await Task.findById(id)
    res.status(200).json(task)
} 
  