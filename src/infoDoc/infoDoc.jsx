import { Link } from "react-router-dom";
import style from "./infoDoc.module.scss";
import imgEj from "./infoDocimagendeejemplo.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
function InfoDoc() {
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
        <img src={imgEj}></img>
        <article className={style.contForm}>
          <form>
            <label>
              <FaInfoCircle></FaInfoCircle>Titulo del documento: El enigma de la
              calle Blancs-Manter
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Autor: Jean-Francisco Parot
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Categoria: Literatura
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>
              <label>Fisico:</label>
              <input type="radio" name="tipo"></input>
              <label>Digital:</label>
              <input type="radio" name="tipo"></input>
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Paginas: 300
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Fecha de subida: 01 de diciembre de
              2024
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Revision: Version 1
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>Ubicacion fisica actual: En estante
              seccion Literatura-3ra primera fila
            </label>
            <label>
              <FaInfoCircle></FaInfoCircle>
              <label>Cargar Foto de la portada: </label>
              <input type="radio" name="formato" className={style.radioBtn}></input>
              <label>Cargar archivo digital</label>
              <input type="radio" name="formato"></input>
            </label>
          </form>
        </article>
        <article className={style.contBtns}>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <p>Descargar PDF</p>
          </button>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <p>Actualizar</p>
          </button>
          <button>
            <FaCloudDownloadAlt></FaCloudDownloadAlt>
            <p>Eliminar</p>
          </button>
        </article>
      </main>
      <footer className={style.contFooter}>
        <div>
          <p>Actualizar Informacion: </p>
          <p>
            Obra Iconica Obra Literaria de caracter universal, vibrante,
            emocionante que nos remonta a la epocamedieval alta y el
            renacimiento
          </p>
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
