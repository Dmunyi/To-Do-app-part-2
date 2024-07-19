// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    // TO DO: implement edit task functionality
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;