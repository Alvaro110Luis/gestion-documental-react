import { Link } from "react-router-dom";
import style from "./infoDoc.module.scss";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { MyContext } from "../Context";
import supabase from "../supabase/client";

function InfoDoc() {
  const { focusDoc, setFocusDoc } = useContext(MyContext);

  return (
    <>
      <header className={style.contHeader}>
        <Link to="/menu" className={style.logo}>
          <h1>
            <span>Mi</span>Docs
          </h1>
        </Link>
        <b>Maldita Roma</b>
      </header>
      <main className={style.contMain}>
        <img src={focusDoc.portada}></img>
        <article className={style.contForm}>
          <form>
            <label>
              <FaInfoCircle></FaInfoCircle>Titulo del documento:
              <input
                type="text"
                defaultValue={focusDoc.titulo}
                onChange={(e) => {
                  setFocusDoc((prev) => ({ ...prev, titulo: e.target.value }));
                  console.log(focusDoc);
                }}
              ></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Autor:
              <input
                type="text"
                defaultValue={focusDoc.autor}
                onChange={(e) => {
                  setFocusDoc((prev) => ({ ...prev, autor: e.target.value }));
                  console.log(focusDoc);
                }}
              ></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Categoria:{" "}
              <input
                type="text"
                defaultValue={focusDoc.categoria}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    categoria: e.target.value,
                  }));
                  console.log(focusDoc);
                }}
              ></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>
              <label>Fisico:</label>
              <input
                type="checkbox"
                defaultChecked={focusDoc.fisico}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    fisico: e.target.checked,
                  }));
                  console.log(focusDoc);
                }}
              ></input>
              <label>Digital:</label>
              <input
                type="checkbox"
                defaultChecked={focusDoc.digital}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    digital: e.target.checked,
                  }));
                  console.log(focusDoc);
                }}
              ></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Paginas:{" "}
              <input
                type="number"
                defaultValue={focusDoc.paginas}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    paginas: e.target.value,
                  }));
                  console.log(focusDoc);
                }}
              />
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Fecha de subida:{" "}
              <input
                type="date"
                defaultValue={focusDoc.fecha}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    fecha: e.target.value,
                  }));
                  console.log(focusDoc);
                }}
              />
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Revision:
              <input
                type="text"
                defaultValue={focusDoc.revision}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    revision: e.target.value,
                  }));
                  console.log(focusDoc);
                }}
              />
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Ubicacion fisica actual:
              <input
                type="text"
                defaultValue={focusDoc.ubicacion}
                onChange={(e) => {
                  setFocusDoc((prev) => ({
                    ...prev,
                    ubicacion: e.target.value,
                  }));
                  console.log(focusDoc);
                }}
              />
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>
              Cargar Foto de la portada:
              <input type="file" className={style.radioBtn}></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>
              Cargar archivo digital:
              <input type="file"></input>
            </label>
          </form>
        </article>
        <article className={style.contBtns}>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <a href={focusDoc.portada} download="archivo">
              Descargar PDF
            </a>
          </button>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <input type="file"></input>
          </button>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <a
              onClick={() => {
                setFocusDoc({});
                window.location = "/menu";
              }}
            >
              Eliminar
            </a>
          </button>
        </article>
      </main>
      <footer className={style.contFooter}>
        <div>
          <p>Actualizar Informacion: </p>
          <p>{focusDoc.resumen}</p>
          <p>
            Estado del libro: Le falta cubierta y le faltan las hojas 15 y 29 y
            se encuentra en el estado desgastado con rayones
          </p>
        </div>
      </footer>
    </>
  );
}
export default InfoDoc;
