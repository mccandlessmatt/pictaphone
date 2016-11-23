import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  token: String,
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }]
});

export default mongoose.model('Game', gameSchema);
