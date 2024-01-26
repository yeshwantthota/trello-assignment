import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./components/UserDetails.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import TaskBoard from "./components/TaskBoard.jsx";
import CreateTodo from "./components/createTodo.jsx";
import FilteredTasks from "./components/FilteredTasksByPriority.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/details",
//     element: <UserDetails />,
//   },
//   {
//     path: "/taskboard",
//     element: <TaskBoard />,
//   },
//   {
//     path: "/createTodo",
//     element: <CreateTodo />,
//   },
//   {
//     path: "/filteredTasks",
//     element: <FilteredTasks />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
    </React.StrictMode>
  </Provider>
);
