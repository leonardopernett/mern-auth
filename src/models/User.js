import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
}, {
  timestamps: true,
  versionKey: false,
})

userSchema.plugin(mongoosePaginate)

export default mongoose.model('User', userSchema)