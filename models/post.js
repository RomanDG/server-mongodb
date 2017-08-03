import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let postSchema = new Schema({
	id: Number,
  title: String,
  text: String,
  img: {
    alt: String,
    src: String,
    width: String,
    height: String
    },    
  metaData: {
    author: String,
    createDate: String,
    updateDate: String,
    currentLike: Number
  }
});

export default mongoose.model('Post', postSchema);