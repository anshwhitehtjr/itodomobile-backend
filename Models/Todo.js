const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    desc: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('todos', TodoSchema);
module.exports = Todo;
