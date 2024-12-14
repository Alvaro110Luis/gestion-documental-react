import style from "./menu.module.scss";
import Docum from "./documento/docum";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <header className={style.contHeader}>
        <article>
          <h1 className={style.logo}>
            <span>Mi</span>Docs
          </h1>
          <section>
            <div>Ver por categorias</div>
            <div>Subir</div>
            <div>Busqueda</div>
          </section>
        </article>
        <h2>Todos los documentos</h2>
      </header>
      <section className={style.contDoc}>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
        <Docum></Docum>
      </section>
      <footer className={style.footerDocs}>
        <Link>1</Link>
        <Link>2</Link>
        <Link>3</Link>
        <Link>4</Link>
      </footer>{" "}
    </>
  );
}
export default Menu;
