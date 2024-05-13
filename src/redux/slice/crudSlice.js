import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  tasks: [
    {
      id: "asd123",
      title: "Navbar Animasyonu",
      author: "ahmet",
      assigned_to: "mehmet",
      end_date: "2024-01-01",
    },
    {
      id: "asda23",
      title: "Footer Responsive",
      author: "Ali",
      assigned_to: "mehmet",
      end_date: "2024-02-01",
    },
  ],
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();

      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      //1.first choice filter
      //  const filtred= state.tasks.filter((task) => task.id !== action.payload);
      //   state.tasks = filtred;
      //2.choice splice
      //a)first need to find a index
      const i = state.tasks.findIndex((t) => t.id === action.payload);
      //for the delete from tje list(first param what you wanna delete,second param how many you wanna delete)
      state.tasks.splice(i, 1);
    },

    editTask: (state, action) => {
      //for the update need to find a place where is the data
      const i = state.tasks.findIndex((t) => t.id === action.payload.id);
      // for the update
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

//export to actions
export default crudSlice.reducer;
export const { addTask, editTask, deleteTask } = crudSlice.actions;

//export to reducer
