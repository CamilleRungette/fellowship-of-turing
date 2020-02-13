const mongoose = require('./db');

let articleSchema = mongoose.Schema({
    title: String,
    imageURL: String,
    content: String,
    date: Date,
    author: String,
    tags: [String]
});

const MessageModel = mongoose.model("articles", articleSchema);
module.exports = MessageModel;