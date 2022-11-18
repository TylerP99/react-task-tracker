const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        default: "",
    },
    reminder: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;