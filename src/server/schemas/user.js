import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
});

export default mongoose.model('User', userSchema);
