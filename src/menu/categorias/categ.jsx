import { Link } from "react-router-dom";
import style from "./categ.module.scss";
import Docum from "../documento/docum";
import { useContext } from "react";
import { MyContext } from "../../Context";
function Categoria() {
  const { documentos, setCategoria, cats } = useContext(MyContext);
  function Opcion({ cat }) {
    return (
      <div className={style.contCat}>
        <p>{cat}</p>
        <Link
          to="/menu"
          onClick={() => {
            setCategoria(cat);
          }}
        >
          <img src={documentos[0].portada}></img>
        </Link>
      </div>
    );
  }
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
        {cats.map((v, i) => {
          return <Opcion key={i} cat={v}></Opcion>;
        })}
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
