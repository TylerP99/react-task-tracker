import { useState } from "react"

function AddTaskForm({onAdd}) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Add a task");
            return;
        }

        onAdd({text, day: date, reminder});

        setText("");
        setDate("");
        setReminder(false);
    }

  return (
    <form
    className="add-form"
    onSubmit={onSubmit}
    >
        <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
            type="text"
            name="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="date">Day & Time</label>
            <input
            type="text"
            name="date"
            placeholder="Add Date & Time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="reminder">Set Reminder</label>
            <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}
            />
        </div>

        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTaskForm