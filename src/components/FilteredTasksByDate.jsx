import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Task from "./Task";
const FilteredTasksByDate = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const sortedTasksByDate = [...tasks].sort((a, b) => {
    const dateA = new Date(a.plannedDate);
    const dateB = new Date(b.plannedDate);

    return dateA - dateB;
  });
  return (
    <div className="flex ">
      <div className="w-1/5 p-4 bg-gray-800 text-white h-screen">
        <Sidebar />
      </div>

      <div className="f">
        <h2 className="ml-4 p-2 font-bold">Sorted Tasks By Date</h2>
        {sortedTasksByDate.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default FilteredTasksByDate;
