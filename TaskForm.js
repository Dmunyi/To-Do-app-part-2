import React, { useState } from 'react';

const TaskForm = ({ onSubmit, editingTask, onEdit }) => {
  const [name, setName] = useState(editingTask ? editingTask.name : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !description) {
      setErrors({ name: 'Required', description: 'Required' });
      return;
    }
    const task = { id: editingTask ? editingTask.id : Date.now(), name, description, completed: false };
    onSubmit(task);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        {errors.name && <div>{errors.name}</div>}
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        {errors.description && <div>{errors.description}</div>}
      </label>
      <br />
      <button type="submit">Add Task</button>
      {editingTask && (
        <button type="button" onClick={() => onEdit({ ...editingTask, name, description })}>
          Update Task
        </button>
      )}
    </form>
  );
};

export default TaskForm;