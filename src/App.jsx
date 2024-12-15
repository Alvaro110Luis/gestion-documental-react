import style from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./inicio/Registro.jsx";
import Menu from "./menu/menu.jsx";
import InfoDoc from "./infoDoc/infoDoc.jsx";
import SubirDoc from "./menu/subir_Documento/subirDoc.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.cont}>
          <Routes>
            <Route path="/" element={<Registro></Registro>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="/menu/infodoc" element={<InfoDoc></InfoDoc>}></Route>
            <Route path="/menu/subirDocumento" element={<SubirDoc></SubirDoc>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
