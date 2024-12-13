import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./inicio/Registro.jsx";
import Menu from "./menu/menu.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registro></Registro>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
