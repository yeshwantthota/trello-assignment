import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full">
        <button className="bg-violet-400 p-2 rounded-lg w-full">
          Add User
        </button>
      </div>
      <div className="w-full">
        <button className="bg-violet-400 p-2 rounded-lg w-full">
          Invite User
        </button>
      </div>
      <div className="w-full">
        <button className="bg-violet-400 p-2 rounded-lg w-full">
          Create Team
        </button>
      </div>
      <div className="w-full">
        <button
          className="bg-red-400 p-2 rounded-lg w-full"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
