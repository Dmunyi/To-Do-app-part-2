import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={() => onEdit(task)} onDelete={() => onDelete(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;