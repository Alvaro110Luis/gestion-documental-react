import { Link } from "react-router-dom";
import style from "./crearCateg.module.scss";
import { useContext, useState } from "react";
import { MyContext } from "../../Context";
function CrearCategoria() {
  const [nuevaCat, setNuevaCat] = useState("");
  const { cats, setCats } = useContext(MyContext);
  return (
    <>
      <header className={style.contHeader}>
        <Link to="/menu">
          <h1>
            <span>Mi</span>Docs
          </h1>
        </Link>
        <Link
          to="/menu/categorias"
          onClick={() => {
            setCats((rev) => [...rev, nuevaCat]);
            console.log(cats);
          }}
        >
          Crear Nueva Categoria
        </Link>
      </header>
      <main className={style.contMain}>
        <form>
          <article className={style.contOpt}>
            <div>
              <p>Categoria:</p>
              <input
                type="text"
                onChange={(e) => {
                  setNuevaCat(e.target.value);
                }}
              ></input>
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
