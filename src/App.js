import {Fragment, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './index.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Study react course",
      "day": "Feb 9th at 12:30pm",
      "reminder": false
    }
  ]);

  const handleDeleteTask = id => {
    //console.log("Deleted!" , id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleReminder = id => {
    //console.log(id);
    setTasks(tasks.map(task => task.id === id ? {...task , reminder: !task.reminder} : task));
  };

  const handleAddTask = task => {
    //console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id , ...task};
    setTasks([...tasks , newTask]);
  }

  const handleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header title="Tasks To Do" showAdd={showAddTask} onShowAddTask={handleShowAddTask} />
        <Route path="/" exact  render={(props) => (<Fragment>
          {showAddTask && <AddTask onAddTask={handleAddTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={handleToggleReminder} onDelete={handleDeleteTask} /> : <p>No Tasks To Show!</p>} 
        </Fragment>) } />
        <Route path="/about" component={About}/> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
