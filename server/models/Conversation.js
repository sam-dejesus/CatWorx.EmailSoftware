const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,  
    unique: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
 
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
