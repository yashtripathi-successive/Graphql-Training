import mongoose from 'mongoose';

const dummyMessageSchema = new mongoose.Schema({
  message: {type: String, required: true},
  senderName: {type: String,required: true},
});

export default mongoose.model('dummyMessage', dummyMessageSchema);


