import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleEditTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm
        onSubmit={handleAddTask}
        editingTask={editingTask}
        onEdit={handleEditTask}
      />
      <TaskList tasks={tasks} onEdit={(task) => setEditingTask(task)} onDelete={(id) => handleDeleteTask(id)} />
    </div>
  );
}

export default App;