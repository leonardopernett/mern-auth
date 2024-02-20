
import mongoosePaginate from 'mongoose-paginate-v2';
import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true,
      trim: true,
    } ,
    description:{
      type: String,
      required: true,
      trim: true,
      minLength:6
   },
   done:{
    type:Boolean,
    default:false
   },
   date:{
    type:Date,
    default: Date.now()
   }
 },{
  timestamps: true,
  versionKey: false,
 })

taskSchema.plugin(mongoosePaginate)

export default mongoose.model('Tasks',taskSchema)
