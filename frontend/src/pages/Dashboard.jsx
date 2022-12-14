import {useState, useEffect} from "react";

import taskService from "../features/taskService";

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskForm from '../components/forms/AddTaskForm';

function Dashboard() {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true,
      },
      {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true,
      },
      {
          id: 3,
          text: "Food Shopping",
          day: "Feb 5th at 2:30pm",
          reminder: false,
      },
    ]);

    useEffect(() => {
      const getTasks = async () => {
        const tasks = await taskService.getTasks();
        console.log(tasks);

        //setTasks(tasks);
      };
      getTasks();
    }, [tasks]);

    // Add task
    const addTask = (task) => {
      // Send to db
      (async () => {
        const newTask = await taskService.createTask(task);

        setTasks({...tasks, newTask})
      })()
    }
  
    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    }
  
    // Toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map(task => (task.id === id) ? {...task, reminder: !task.reminder} : task))
    }
  
    // Toggle task form
    const toggleTaskForm = () => {
      setShowTaskForm(!showTaskForm);
    }
  
    return (
      <>
        <Header
        title={"Task Tracker"}
        showTaskForm={showTaskForm}
        onButtonToggle = {toggleTaskForm}
        />
        { showTaskForm &&
          <AddTaskForm 
          onAdd={addTask}
          />
        }
        { tasks.length ?
          <Tasks
            tasks={tasks}
            onDelete = {deleteTask}
            onToggle = {toggleReminder}
          />
          : <h3>No tasks to display</h3>
        }
      </>
    );
}

export default Dashboard