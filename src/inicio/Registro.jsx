import style from "./registro.module.scss";
import imgInicio from "../assets/paginaprincipal.png";
import { Outlet, Route, Routes } from "react-router-dom";
function Registro() {
  return (
    <>
      <header className={style.contHead}>
        <h1>
          Organiza, clasifica, accede,<br></br> y haz seguimiento...
        </h1>
        <p>
          <span className={style.logo}>Mi</span> Docs
        </p>
      </header>
      <div className={style.contBody}>
        <img src={imgInicio} width="800px" height="455px"></img>
        <Outlet />
      </div>
      <footer className={style.contFooter}>
        <p>
          Documentos · Informes · Contratos · Memorias · Folletos · ¡Todo en un
          solo click!
        </p>
        <p>© Todos los Derechos Reservados 2024</p>
      </footer>
    </>
  );
}

export default Registro;
