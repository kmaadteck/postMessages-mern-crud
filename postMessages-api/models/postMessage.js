import mongoose from "mongoose";


const postSchema = mongoose.Schema( 
{
  title: { type: String },
  message: { type: String },
});
var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;