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
      // a) todo'ya id ekle
      action.payload.id = v4();

      // b) veriyi task'lerin arasına ekle
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {},
    deleteTask: (state, action) => {},
  },
});

//export to actions
export default crudSlice.reducer;
export const { addTask, editTask, deleteTask } = crudSlice.actions;

//export to reducer
