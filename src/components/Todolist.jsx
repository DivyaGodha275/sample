import React, { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">React ToDo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 w-full rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-dark px-4 py-1 ms-2 rounded hover:bg-blue-600 "
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.length === 0 && <li className="text-gray-500">No tasks yet</li>}
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-1 border-b"
          >
            <span
              onClick={() => toggleTask(index)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
