import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../userSlice";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users[users.length - 1];
    console.log(user.email);
    dispatch(updateUserDetails({ email: user.email, name, role, phone }));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col border  rounded-lg p-10 bg-blue-200 shadow-xl w-1/4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">Fill Your Details</h1>
        <div className="flex flex-col p-2 m-2">
          <span>Name:</span>
          <input
            type="text"
            placeholder="Name"
            className="p-2 outline-none rounded-md my-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2 m-2">
          <span>Role:</span>
          <input
            type="text"
            placeholder="Enter Your Role"
            className="p-2 outline-none rounded-md my-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2 m-2">
          <span>Phone No:</span>
          <input
            type="number"
            placeholder="Enter Your Phone No."
            className="p-2 outline-none rounded-md my-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-400 m-2 p-2 rounded-lg">
          Log In
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
