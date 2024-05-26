const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
