import style from "./subirDoc.module.scss";
function SubirDoc() {
  return (
    <>
      <header className={style.contHeader}>
        <h1>
          <span>Mi</span>Docs
        </h1>
        <b>Subir Documento</b>
      </header>
      <main className={style.contMain}>
        <form>
          <div>
            <p>Titulo del Documento:</p>
            <input type="text"></input>
          </div>
          <label>
            <p>Autor:</p>
            <input type="text"></input>
          </label>
          <label>
            <p>Categoria:</p>
            <input type="text"></input>
          </label>
          <div>
            <p>Fisico:</p>
            <input type="radio" name="formato"></input>
            Digital:
            <input type="radio" name="formato"></input>
          </div>
          <label>
            <p>Paginas:</p>
            <input type="text"></input>
          </label>
          <label>
            <p>Revision:</p>
            <input type="text"></input>
          </label>
          <label>
            <p>Ubicacion fisica actual:</p>
            <input type="text"></input>
          </label>
          <div>
            <p>Cargar foto de portada:</p>
            <input type="file"></input>
          </div>
          <div>
            <p>Cargar archivo Digital:</p>
            <input type="file"></input>
          </div>
          <div>
            <p></p>
            <input type="submit"></input>
          </div>
        </form>
      </main>
      <footer className={style.contFooter}>
        <div>
          <p>Breve Resumen:</p>
          <p>
            Iconica obra literaria de caracter universal, vibrante, emocionante
            y lleno de intrigas, que se daran a conocer de acuerdo a la lectura
            de los capitulos pertinentes, la novela nos remonta a la epoca
            medieval alta y el renacimiento, en la cual dos jovenes que se
            quieren mucho no pueden estar juntos porque sus familias son
            rivales.
          </p>
        </div>
      </footer>
    </>
  );
}
export default SubirDoc;
