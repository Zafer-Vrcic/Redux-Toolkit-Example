import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slice/counterSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.counterSlice);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between mb-3 p-4 bg-black">
      <h1 className={state.is_dark_theme ? " text-light" : "text-secondary"}>
        Redux Toolkit
      </h1>
      <nav>
        <NavLink
          className="text-decoration-none text-success u mx-5 link-underline-opacity-0"
          to={"/"}
        >
          CRUD
        </NavLink>
        <NavLink
          className={" text-decoration-none mx-5 text-danger"}
          to={"/sayac"}
        >
          Sayac
        </NavLink>

        <button
          className="btn btn-warning"
          onClick={() => dispatch(changeTheme())}
        >
          temayı değiş
        </button>
      </nav>
    </div>
  );
};

export default Header;
