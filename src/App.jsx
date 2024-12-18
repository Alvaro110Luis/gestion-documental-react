import style from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./inicio/Registro.jsx";
import Menu from "./menu/menu.jsx";
import InfoDoc from "./infoDoc/infoDoc.jsx";
import SubirDoc from "./menu/subir_Documento/subirDoc.jsx";
import CrearCategoria from "./menu/crearCategoria/crearCateg.jsx";
import Categoria from "./menu/categorias/categ.jsx";
import Crearcuenta from "./inicio/crearCuenta.jsx";
import IniciaSesion from "./inicio/iniciarSesion.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.cont}>
          <Routes>
            <Route path="/gestion-documental-react" element={<Registro></Registro>}>
              <Route
                path={"/gestion-documental-react" || "/registro"}
                element={<Crearcuenta></Crearcuenta>}
              ></Route>
              <Route
                path="/iniciaSesion"
                element={<IniciaSesion></IniciaSesion>}
              ></Route>
            </Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="/menu/infodoc" element={<InfoDoc></InfoDoc>}></Route>
            <Route
              path="/menu/subirDocumento"
              element={<SubirDoc></SubirDoc>}
            ></Route>
            <Route
              path="/menu/crear-categoria"
              element={<CrearCategoria></CrearCategoria>}
            ></Route>
            <Route
              path="/menu/categorias"
              element={<Categoria></Categoria>}
            ></Route>
            <Route path="*" element={<h1>Pagina no encontrada</h1>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
