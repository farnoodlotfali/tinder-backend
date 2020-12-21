import mongoose from 'mongoose';

const cardSchena = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model('cards', cardSchena);
