import style from "./docum.module.scss";
import sinImagen from "./documentoPruebapng.png";
import { Link } from "react-router-dom";
function Docum() {
  return (
    <Link to='/menu/infoDoc' className={style.linkDoc}>
      <img src={sinImagen}></img>
    </Link>
  );
}
export default Docum;
