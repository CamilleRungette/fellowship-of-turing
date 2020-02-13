const mongoose = require('./db');

let messageSchema = mongoose.Schema({
 sender_email: String,
 content: String,
 date: Date,
})

const MessageModel = mongoose.model("messages", messageSchema);
module.exports = MessageModel;