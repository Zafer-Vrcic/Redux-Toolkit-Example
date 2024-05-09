import { useSelector } from "react-redux";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";

const App = () => {
  const { is_dark_theme } = useSelector((store) => store.counterSlice);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={is_dark_theme ? "text-bg-light" : "text-bg-dark"}
    >
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<CrudPage/>} />
      <Route path="/sayac" element={<Counter/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
