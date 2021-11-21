import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login/Login";
import Home from "./component/Home/Home/Home";
import Details from "./component/Home/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/details/:id" element={<Details></Details>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
