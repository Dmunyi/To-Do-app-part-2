// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      dispatch(addTask({ id: Math.random(), name: taskName, description: taskDescription, isDone: false }));
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <br />
      <label>
        Task Description:
        <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;