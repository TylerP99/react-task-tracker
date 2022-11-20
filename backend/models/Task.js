const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: "",
    },
    reminder: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;