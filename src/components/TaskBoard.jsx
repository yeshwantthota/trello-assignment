import React, { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateTodo from "./createTodo";
import Sidebar from "./Sidebar";

const TaskBoard = () => {
  const [showCreateTodo, setShowCreateTodo] = useState(false);
  const navigate = useNavigate();
  const handleAddTask = () => {
    setShowCreateTodo(true);
  };

  const handleCloseCreateTodo = () => {
    setShowCreateTodo(false);
  };
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div className="flex">
      <div className="w-1/5 p-4 bg-gray-800 text-white h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex m-2">
        <div className="w-1/3 p-4 bg-red-200 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Todo</h2>
          {tasks
            .filter((task) => task.status === "Todo")
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </div>

        <div className="w-1/3 p-4 bg-red-200 rounded-lg mx-2">
          <h2 className="text-xl font-bold mb-4 text-center">In Progress</h2>
          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </div>

        <div className="w-1/3 p-4 bg-red-200 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Completed</h2>
          {tasks
            .filter((task) => task.status === "Completed")
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </div>

        <div className="flex-shrink-0 p-4">
          <button
            onClick={handleAddTask}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Create Todo Modal */}
      {showCreateTodo && <CreateTodo onClose={handleCloseCreateTodo} />}
    </div>
  );
};

export default TaskBoard;
