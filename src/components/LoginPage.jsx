import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      navigate("/taskboard");
    } else {
      const newUser = {
        email,
        password,
        details: {
          name: "",
          role: "",
          phone: "",
        },
      };

      dispatch(addUser(newUser));

      setEmail("");
      setPassword("");
      navigate("/details");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col border  rounded-lg p-10 bg-blue-200 shadow-xl w-1/4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">Login</h1>
        <div className="flex flex-col p-2 m-2">
          <span>Email:</span>
          <input
            type="text"
            placeholder="Email"
            className="p-2 outline-none rounded-md my-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2 m-2">
          <span>Password:</span>
          <input
            type="text"
            placeholder="password"
            className="p-2 outline-none rounded-md my-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-400 m-2 p-2 rounded-lg">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
