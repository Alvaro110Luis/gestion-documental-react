import { Link } from "react-router-dom";
import style from "./crearCateg.module.scss";
function CrearCategoria() {
  return (
    <>
      <header className={style.contHeader}>
        <Link to='/menu'>
          <h1>
            <span>Mi</span>Docs
          </h1>
        </Link>
        <b>Crear Nueva Categoria</b>
      </header>
      <main className={style.contMain}>
        <form>
          <article className={style.contOpt}>
            <div>
              <p>Categoria:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Ruta ubicacion fisica:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Cargar portada:</p>
              <input type="checkbox"></input>
            </div>
          </article>
          <div>
            <textarea placeholder="Breve Descripcion - Observaciones"></textarea>
          </div>
        </form>
      </main>
      <footer className={style.contFooter}></footer>
    </>
  );
}
export default CrearCategoria;
