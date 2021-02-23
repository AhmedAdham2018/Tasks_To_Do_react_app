import { useState } from 'react';

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);


    const handleSubmitTask = e => {
        e.preventDefault();

        if (!text) {
            return;
        }

        onAddTask({text , day , reminder});

        setText("");
        setDay("");
        setReminder(false);
    };

    return ( <form className="add-form" onSubmit={handleSubmitTask}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add Task"/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" value={day} onChange={e => setDay(e.target.value)} placeholder="Add Day & Time"/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input value={reminder} checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} type="checkbox" />
        </div>
        <input className="btn btn-block" type="submit" value="Save Task"/>
    </form> );
}
 
export default AddTask;