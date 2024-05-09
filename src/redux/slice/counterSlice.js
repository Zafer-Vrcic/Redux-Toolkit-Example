/*
to create reducers and actions in the differently page,
we will avoid this situation with slice and create both of them in one point.

?Slice creating
1)import slice
2)write parameters
- - name:slice name" string"
--initialState: starter
- - reducers:the functions where we writing what will day do.
(forget also old reducers. think like this is new method)



*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, is_dark_theme: true },
  //reducers is functions which explaining how will state change
  //reducer/actions functions
  //all actions functions have two parametar
  // 1:state last version
  // 2:actions object
  reducers: {
    // the main point of the different clasic redux and toolkit is,
    //with toolkit we can directly effect and change what we wanna.
    increase: (state) => {
      state.count++;
    },
    decrase: (state) => {
      state.count !== 0 && state.count--;
    },
    // if we going to use a payload we need to write second param,but not necesseray
    set_count:(state,action)=>{
      state.count=action.payload
    },
    changeTheme: (state)=>{
      state.is_dark_theme= !state.is_dark_theme
    }

  },
});
//createSlice also doing switch case method automaticly which we was did in the clasic redux.
export default counterSlice.reducer;

//createSlice,Creating automaticly actions which we did in the up method of actions
export const { increase, decrase, set_count,changeTheme } = counterSlice.actions;
