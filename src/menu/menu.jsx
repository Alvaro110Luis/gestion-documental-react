import style from "./menu.module.scss";
import Docum from "./documento/docum";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "../Context";
import supabase from "../supabase/client";
import { useState } from "react";

function Menu() {
  const { documentos, categoria } = useContext(MyContext);
  return (
    <>
      <header className={style.contHeader}>
        <article>
          <Link to="/" className={style.logo}>
            <h1>
              <span>Mi</span>Docs
            </h1>
          </Link>
          <section>
            <Link to="/menu/categorias">Ver por categorias</Link>
            <Link className={style.subir} to="/menu/subirDocumento">
              Subir
            </Link>
            <div>Busqueda</div>
          </section>
        </article>
        <h2>Todos los documentos</h2>
      </header>
      <section className={style.contDoc}>
        {documentos.map((v, i) => {
          if (categoria != "") {
            if (categoria == v.categoria)
              return <Docum doc={v} key={i}></Docum>;
          } else {
            return <Docum doc={v} key={i}></Docum>;
          }
        })}
      </section>
      <footer className={style.footerDocs}>
        <Link>1</Link>
        <Link>2</Link>
        <Link>3</Link>
        <Link>4</Link>
      </footer>
    </>
  );
}
export default Menu;
