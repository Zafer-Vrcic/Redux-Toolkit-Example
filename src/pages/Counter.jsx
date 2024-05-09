import React from "react";
import { decrase, increase, set_count, } from "../redux/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.counterSlice);
  return (
    <div className=" d-flex gap-4 align-items-center justify-content-center  vh-100">
      <button onClick={() => dispatch(decrase())} className=" btn bg-danger">
        Eksi
      </button>
      <span className="fw-bold fs-2">{state.count} </span>
      <button onClick={() => dispatch(increase())} className=" btn bg-primary">
        Artı
      </button>
      <button className="btn btn-close-white" onClick={()=> dispatch(set_count(0))} >sıfırla</button>
      
    </div>
  );
};

export default Counter;
