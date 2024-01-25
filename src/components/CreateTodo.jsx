import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { useNavigate } from "react-router-dom";

const CreateTodo = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState({
    id: Date.now(),
    title: "",
    description: "",
    priority: "",
    plannedDate: "",
    status: "",
    assignee: "",
    reporter: "",
    attachment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);
    dispatch(addTask(todoData));
    setTodoData({
      title: "",
      description: "",
      priority: "",
      plannedDate: "",
      status: "",
      assignee: "",
      reporter: "",
      attachment: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col justify-center bg-white p-4 shadow-md relative rounded-lg w-2/4">
        <h2 className="text-2xl font-bold m-4">Create Todo</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={todoData.title}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={todoData.description}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <label>Priority:</label>
          <select
            name="priority"
            value={todoData.priority}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          >
            <option value="Major">Major</option>
            <option value="Normal">Normal</option>
            <option value="Minor">Minor</option>
          </select>

          <label>Planned Date:</label>
          <input
            type="date"
            name="plannedDate"
            value={todoData.plannedDate}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <label>Status:</label>
          <select
            name="status"
            value={todoData.status}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <label>Assignee:</label>
          <input
            type="text"
            name="assignee"
            value={todoData.assignee}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <label>Reporter:</label>
          <input
            type="text"
            name="reporter"
            value={todoData.reporter}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <label>Attachment:</label>
          <input
            type="text"
            name="attachment"
            value={todoData.attachment}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Todo
          </button>
        </form>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
