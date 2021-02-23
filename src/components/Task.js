import { FaTimesCircle } from 'react-icons/fa';

const Task = ({task , onDelete , onToggle}) => {
    return ( <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
        <h2>{task.text}<FaTimesCircle className="deleteIcon" onClick={() => onDelete(task.id)} /></h2>
        <p>{task.day}</p>
    </div> );
}
 
export default Task;