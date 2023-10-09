const { Schema, model } = require('mongoose');

const messageSchema= new Schema({
id: {
  type: String,
  required: true,  
  unique: true,
},
user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
      },
conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation'
  },
title:{
type: String,
},
text:{
    type: String,
},
createdAt: {
    type: Date,
    default: Date.now
  },

})

const Message = model('Message', messageSchema);

module.exports = Message;