import './App.css';

import { useState } from "react"

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';


function App() {
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

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
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
    <div className='container'>
      <Header
      title={"Task Tracker"}
      showTaskForm={`${color}`${color}showTaskForm}
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
    </div>
  );
}

export default App;