import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: Date.now(),
        title: "Trello clone",
        description: "Trello Clone by Practo",
        status: "Todo",
        priority: "Major",
        PlannedDate: "24",
        attachments: ["file1.jpg", "file2.jpg"],
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        const existingTask = { ...state.tasks[taskIndex] };
        state.tasks[taskIndex] = { ...existingTask, ...updatedTask };
      }
    },
  },
});

export const { addTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
