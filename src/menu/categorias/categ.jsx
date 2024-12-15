import { Link } from "react-router-dom";
import style from "./categ.module.scss";
import Docum from "../documento/docum";
function Categoria() {
  return (
    <>
      <header className={style.contHeader}>
        <Link to="/menu">
          <h1>
            <span>Mi</span>Docs
          </h1>
        </Link>
        <b>Categorias</b>
      </header>
      <main className={style.contMain}>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
        <div>
          <p>Matematica</p>
          <Docum></Docum>
        </div>
      </main>
      <footer className={style.contFooter}>
        <article>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </article>
        <div>
          <Link to="/menu/crear-categoria">Crear Nueva Categoria</Link>
        </div>
      </footer>
    </>
  );
}
export default Categoria;
