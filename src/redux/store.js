//we using in the toolkit configureStore
//difference of the createStore-configureStore
// 1-automaticly thunk coming in toolkit patch
// 2-Automaticly controling reducer and put them together

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import crudSlice from "./slice/crudSlice";

export default configureStore({
  reducer: { counterSlice,crudSlice },
});

