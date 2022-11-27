const API_BASE = "/api/tasks/";

// Get tasks
const getTasks = async (user) => {

    const response = await fetch(
        API_BASE
    );
};

// Create task
const createTask = async (task, user) => {

};

// Update task
const updateTask = async (task, taskID, user) => {

};

// Delete task
const deleteTask = async (taskID, user) => {

};

const taskService = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};

export default taskService;