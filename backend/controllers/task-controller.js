const Task = require("../models/Task");

const getTasks = async (req, res, next) => {
    try{
        const tasks = await Task.find({user: req.user._id});

        res.status(200).json({tasks});
    }
    catch(e) {
        console.error(e);
        next(e);
    }

    
};

const createTask = async (req, res, next) => {
    try {
        const task = {
            text: req.body.text,
            date: req.body.date,
            reminder: req.body.reminder,
            user: req.user._id,
        };

        const errors = validateTask(task);

        if(errors.length) {
            return res.status(400).json({errors});
        }

        const newTask = await Task.create(task);

        res.status(201).json(newTask);

    }
    catch(e) {
        console.error(e);
        next(e);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = {
            text: req.body.text,
            date: req.body.date,
            reminder: req.body.reminder,
        }

        const errors = validateTask(task);

        if(errors.length) {
            return res.status(400).json({errors});
        }

        const updated = await Task.findByIdAndUpdate(req.body.id, task, {new: true});

        res.status(200).json(updated);
    }
    catch(e) {
        console.error(e);
        next(e);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const deleted = await Task.findByIdAndDelete(req.body.id);

        if(!deleted) {
            return res.status(400).json({errors: [{msg: "Task not found"}]});
        }

        res.status(200).json({id: deleted._id});
    }
    catch(e) {
        console.error(e);
        next(e);
    }
};

const validateTask = (task) => {
    const errors = [];

    if(!task.text) {
        errors.push({msg: "Task required"});
    }

    return errors;
};



module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}