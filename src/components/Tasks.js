import {Fragment} from 'react';
import Task from './Task';


const Tasks = ({tasks , onDelete , onToggle}) => {

    return (<Fragment>
        {tasks.map(task => <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />)}
    </Fragment>);
}
 

export default Tasks;